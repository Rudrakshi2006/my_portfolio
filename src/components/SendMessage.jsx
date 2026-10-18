import { useState, useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/portfolio';
import { EASE, Magnetic } from './fx';

// Regex patterns for live validation
const NAME_REGEX = /^[a-zA-Z\s]{3,40}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MIN_MSG_LEN = 10;
const MAX_MSG_LEN = 500;
const DRAFT_STORAGE_KEY = 'rudrakshi_contact_draft';
const SENT_STORAGE_KEY = 'rudrakshi_sent_messages';

export default function SendMessage() {
  const formId = useId();

  // Form input states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Touched states to display errors after interaction or submission attempt
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [autosaveStatus, setAutosaveStatus] = useState('Instant autosave enabled');

  // Load saved draft from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(DRAFT_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          setFormData({
            name: parsed.name || '',
            email: parsed.email || '',
            message: parsed.message || '',
          });
        }
      }
    } catch {
      // localStorage unavailable / blocked
    }
  }, []);

  // Autosave draft to localStorage on every change
  useEffect(() => {
    if (submitted) return;
    try {
      if (formData.name || formData.email || formData.message) {
        localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(formData));
        setAutosaveStatus('Draft autosaved');
      } else {
        localStorage.removeItem(DRAFT_STORAGE_KEY);
        setAutosaveStatus('Instant autosave enabled');
      }
    } catch {
      // Ignore write errors
    }
  }, [formData, submitted]);

  // Validation logic
  const isNameEmpty = formData.name.trim() === '';
  const isNameValid = !isNameEmpty && NAME_REGEX.test(formData.name.trim());
  const nameError =
    touched.name && !isNameValid
      ? isNameEmpty
        ? 'Please enter a valid name (3-40 letters).'
        : 'Please enter a valid name (3-40 letters).'
      : '';

  const isEmailEmpty = formData.email.trim() === '';
  const isEmailValid = !isEmailEmpty && EMAIL_REGEX.test(formData.email.trim());
  const emailError =
    touched.email && !isEmailValid
      ? isEmailEmpty
        ? 'Please provide a valid email (e.g. name@domain.com).'
        : 'Please provide a valid email (e.g. name@domain.com).'
      : '';

  const isMsgEmpty = formData.message.trim() === '';
  const isMsgValid = !isMsgEmpty && formData.message.trim().length >= MIN_MSG_LEN;
  const msgError =
    touched.message && !isMsgValid
      ? isMsgEmpty
        ? 'Message must be at least 10 characters long.'
        : 'Message must be at least 10 characters long.'
      : '';

  const isFormValid = isNameValid && isEmailValid && isMsgValid;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > MAX_MSG_LEN) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all as touched so validation errors show if empty or invalid
    setTouched({ name: true, email: true, message: true });

    if (!isFormValid) {
      return;
    }

    // 1. Store permanently into localStorage (sent messages archive)
    try {
      const existing = JSON.parse(localStorage.getItem(SENT_STORAGE_KEY) || '[]');
      const newEntry = {
        id: Date.now(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        date: new Date().toLocaleString(),
      };
      localStorage.setItem(SENT_STORAGE_KEY, JSON.stringify([newEntry, ...existing]));
      localStorage.removeItem(DRAFT_STORAGE_KEY);
    } catch (err) {
      console.warn('Storage write failed', err);
    }

    setSubmitted(true);

    // 2. Dispatch via mailto client
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const targetEmail = profile?.email || 'rudrakshi2006@example.com';
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setTouched({ name: false, email: false, message: false });
    setSubmitted(false);
    try {
      localStorage.removeItem(DRAFT_STORAGE_KEY);
    } catch {}
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.8, ease: EASE }}
      className="relative mx-auto mt-14 w-full max-w-2xl text-left"
    >
      {/* Soft whitish ambient glow (removed reddish glow) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent blur-2xl opacity-40"
      />

      {/* Main Card Container — Clean Whitish & Frosted Neutral Glass */}
      <div className="relative rounded-2xl border border-white/20 bg-[#16161e]/95 p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
        {/* Header row */}
        <div className="mb-6">
          <h3 className="flex items-center gap-2 font-sans text-xl font-bold tracking-tight text-white sm:text-2xl">
            SEND A MESSAGE <span className="inline-block">✍️</span>
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-mist">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {autosaveStatus}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="py-10 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-2xl text-emerald-400">
                ✓
              </div>
              <h4 className="font-sans text-lg font-bold text-white">Message Dispatched & Saved!</h4>
              <p className="mt-1 text-sm text-mist">
                Message saved to local storage & email client opened. Thanks for reaching out, {formData.name}!
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-semibold text-white hover:border-white/40 hover:bg-white/15 transition"
              >
                ↺ Send Another Message
              </button>
            </motion.div>
          ) : (
            <form key="form" onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Field 1: Name */}
              <div>
                <div className="relative">
                  <input
                    id={`${formId}-name`}
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    placeholder="Your Name"
                    className={`w-full rounded-2xl bg-white/[0.06] px-5 py-3.5 text-sm text-white placeholder:text-mist/70 transition-all outline-none border ${
                      nameError
                        ? 'border-crimson bg-crimson/[0.06] shadow-[0_0_12px_rgba(229,19,43,0.15)] focus:border-crimson'
                        : touched.name && isNameValid
                        ? 'border-emerald-400/60 focus:border-emerald-400'
                        : 'border-white/20 hover:border-white/30 focus:border-white/60 focus:bg-white/[0.09]'
                    }`}
                  />
                  {touched.name && isNameValid && (
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-emerald-400">
                      ✓
                    </span>
                  )}
                </div>
                {nameError && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 px-2 text-xs font-medium text-crimson-2"
                  >
                    {nameError}
                  </motion.p>
                )}
              </div>

              {/* Field 2: Email */}
              <div>
                <div className="relative">
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    placeholder="Your Email (e.g. name@domain.com)"
                    className={`w-full rounded-2xl bg-white/[0.06] px-5 py-3.5 text-sm text-white placeholder:text-mist/70 transition-all outline-none border ${
                      emailError
                        ? 'border-crimson bg-crimson/[0.06] shadow-[0_0_12px_rgba(229,19,43,0.15)] focus:border-crimson'
                        : touched.email && isEmailValid
                        ? 'border-emerald-400/60 focus:border-emerald-400'
                        : 'border-white/20 hover:border-white/30 focus:border-white/60 focus:bg-white/[0.09]'
                    }`}
                  />
                  {touched.email && isEmailValid && (
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-emerald-400">
                      ✓
                    </span>
                  )}
                </div>
                {emailError && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 px-2 text-xs font-medium text-crimson-2"
                  >
                    {emailError}
                  </motion.p>
                )}
              </div>

              {/* Field 3: Message Textarea */}
              <div>
                <div className="relative">
                  <textarea
                    id={`${formId}-message`}
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur('message')}
                    placeholder="Write your message here..."
                    className={`w-full resize-none rounded-2xl bg-white/[0.06] px-5 py-3.5 text-sm text-white placeholder:text-mist/70 transition-all outline-none border ${
                      msgError
                        ? 'border-crimson bg-crimson/[0.06] shadow-[0_0_12px_rgba(229,19,43,0.15)] focus:border-crimson'
                        : touched.message && isMsgValid
                        ? 'border-emerald-400/60 focus:border-emerald-400'
                        : 'border-white/20 hover:border-white/30 focus:border-white/60 focus:bg-white/[0.09]'
                    }`}
                  />
                </div>

                {/* Subtext and Counter Row */}
                <div className="mt-1.5 flex items-center justify-between px-2 text-xs">
                  <div>
                    {msgError ? (
                      <motion.span
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-medium text-crimson-2"
                      >
                        {msgError}
                      </motion.span>
                    ) : (
                      <span className="text-mist">Message must be at least 10 characters long.</span>
                    )}
                  </div>
                  <span
                    className={`font-mono text-[11px] ${
                      formData.message.length >= 480
                        ? 'text-crimson-2 font-bold'
                        : formData.message.length >= 10
                        ? 'text-white'
                        : 'text-mist'
                    }`}
                  >
                    {formData.message.length}/{MAX_MSG_LEN}
                  </span>
                </div>
              </div>

              {/* Submit Button Row */}
              <div className="flex justify-end pt-2">
                <Magnetic>
                  <button
                    type="submit"
                    data-cursor="play"
                    className="group flex items-center gap-2 rounded-full bg-[#1e1e24] px-7 py-3 text-sm font-semibold tracking-wide text-white border border-white/25 shadow-lg hover:border-white/50 hover:bg-[#2a2932] active:scale-95 transition-all"
                  >
                    <span>Send Message</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      📨
                    </span>
                  </button>
                </Magnetic>
              </div>
            </form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
