/** Rudrakshi portfolio: editable JavaScript data. Replace empty links with your own. */
export const profile = {
  "fullName": "Rudrakshi Bhandekar",
  "displayName": "Rudrakshi Bhandekar",
  "firstName": "RUDRAKSHI",
  "seriesTag": "THE SERIES",
  "originalLabel": "A RUDRAKSHI ORIGINAL",
  "role": "Computer Science Engineer | Turning ideas into code, data into insights.",
  "tagline": [
    "Software Development",
    "Data Science",
    "AI / Machine Learning"
  ],
  "intro": "I’m a Computer Science Engineering student who enjoys using software, data science and machine learning to solve real-world problems. Alongside my B.Tech at SIT Nagpur, I’m pursuing a B.S. in Data Science and Applications at IIT Madras. I enjoy learning by building, from web apps to predictive ML systems and research-driven tools.",
  "location": "Nagpur, Maharashtra, India",
  "email": "rudrakshibhandekar17@gmail.com",
  "links": {
    "linkedin": "https://www.linkedin.com/in/rudrakshi-bhandekar-b9257731a/",
    "github": "https://github.com/Rudrakshi2006/"
  },
  "resumePdf": "/documents/Rudrakshi_Bhandekar_Resume.pdf",
  "portrait": {
    "src": "/assets/photograph.png",
    "srcSet": "/assets/photograph.png 1122w, /assets/portrait-720.webp 720w, /assets/portrait-420.webp 420w",
    "alt": "Rudrakshi Bhandekar — professional portrait"
  },
  "interests": [
    "Research & Innovation",
    "Machine Learning",
    "Software Development"
  ]
};

export const education = [
  {
    "school": "Symbiosis Institute of Technology, Nagpur",
    "place": "Nagpur",
    "degree": "B.Tech — Computer Science and Engineering",
    "period": "2024 – May 2028",
    "score": "CGPA 8.81"
  },
  {
    "school": "Indian Institute of Technology Madras — Online",
    "place": "Online",
    "degree": "B.S. — Data Science and Applications (Diploma Level)",
    "period": "Sep 2024 – Present",
    "score": "CGPA 7.33"
  }
];

export const experience = [
  {
    "company": "MainCraft Technologies",
    "role": "Data Science & Analytics Intern",
    "place": "Remote",
    "period": "May 2026 – June 2026",
    "points": [
      "Data preprocessing, exploratory data analysis and predictive modelling using Python, Pandas, NumPy and Scikit-learn.",
      "Contributed to analytics workflows, model evaluation and technical documentation."
    ]
  },
  {
    "company": "Elevate Labs",
    "role": "Web Development Intern",
    "place": "Remote",
    "period": "March 2026 – April 2026",
    "points": [
      "Completed a 45-day task-based internship developing responsive applications with HTML, CSS and JavaScript.",
      "Worked on frontend features, debugging and Git version control."
    ]
  }
];

export const projects = [
  {
    "id": "research-topic",
    "status": "Completed",
    "github": "https://github.com/Rudrakshi2006/Research_Topic_Recommendation_Agent",
    "demo": "https://researchideation.onrender.com",
    "title": "Research Topic Recommendation & Feasibility Analysis",
    "year": "2026",
    "genre": "Solo • Multi-agent AI • Research",
    "logline": "A multi-agent research discovery system that recommends evidence-backed, novel, feasible topics from a researcher’s interests, skills, available resources and timeline.",
    "stack": [
      "Python",
      "LangGraph",
      "Semantic Scholar",
      "OpenAlex",
      "arXiv",
      "NLP"
    ],
    "build": [
      "A multi-agent research discovery system that recommends evidence-backed, novel, feasible topics from a researcher’s interests, skills, available resources and timeline.",
      "LangGraph coordinates intent, search, abstract, gap analysis, verification, trends, topic generation, critique and roadmap agents."
    ],
    "features": [
      "Personalized researcher profile and constraints",
      "Literature retrieval and ranking",
      "Gap verification and publication trends",
      "Hybrid feasibility and novelty scoring",
      "Research roadmap generation"
    ],
    "metrics": [
      { "value": "9", "label": "Coordinated LangGraph Agents" },
      { "value": "3+", "label": "Academic APIs (arXiv, OpenAlex, Semantic Scholar)" },
      { "value": "100%", "label": "Evidence-Backed Feasibility Scoring" },
      { "value": "Live", "label": "Deployed Production App on Render" }
    ],
    "palette": {
      "via": "#572044",
      "to": "#08070d",
      "accent": "#b98bff",
      "from": "#180817"
    },
    "motif": "flow"
  },
  {
    "id": "memorylens",
    "status": "Completed",
    "github": "https://github.com/Rudrakshi2006/memorylens",
    "context": "Amazon hackathon 2026",
    "title": "MemoryLens",
    "year": "2026",
    "genre": "Offline AI • RAG • Semantic Search",
    "logline": "Offline, privacy-preserving file assistant for searching and chatting with local PDFs, codebases and text using semantic retrieval and summarization.",
    "stack": [
      "Python",
      "FastAPI",
      "Ollama",
      "LLaMA",
      "FAISS",
      "SQLite",
      "Sentence Transformers"
    ],
    "build": [
      "Offline, privacy-preserving file assistant for searching and chatting with local PDFs, codebases and text using semantic retrieval and summarization.",
      "Designed around practical applications, iterative improvement and clear user-focused outcomes."
    ],
    "features": [
      "Natural-language document search",
      "Local RAG and summarization",
      "Offline inference without external APIs",
      "Search across PDFs, code and text"
    ],
    "metrics": [
      { "value": "100%", "label": "Local & Offline (Zero Cloud Data Leakage)" },
      { "value": "<0.5s", "label": "Vector Search Latency with FAISS" },
      { "value": "Multi-Doc", "label": "PDF, Codebase & Text Ingestion" },
      { "value": "Amazon", "label": "Hackathon 2026 Innovation Project" }
    ],
    "palette": {
      "via": "#572044",
      "to": "#08070d",
      "accent": "#4cc9ff",
      "from": "#180817"
    },
    "motif": "flow"
  },
  {
    "id": "cyclecura",
    "status": "Completed",
    "title": "CycleCura",
    "year": "2026",
    "genre": "Solo project • Machine Learning • Health",
    "logline": "Personalized menstrual cycle prediction and PCOS/PCOD risk awareness using machine learning, feature engineering and historical cycle data; designed for awareness, not diagnosis.",
    "stack": [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "NumPy"
    ],
    "build": [
      "Personalized menstrual cycle prediction and PCOS/PCOD risk awareness using machine learning, feature engineering and historical cycle data; designed for awareness, not diagnosis.",
      "Led ML and prediction work and team coordination; the project resulted in a published patent application in 2026."
    ],
    "features": [
      "Period date estimation for varied cycles",
      "Non-diagnostic PCOS risk patterns",
      "Personalized reminders and insights",
      "Sustainable menstrual-product awareness",
      "Published patent application"
    ],
    "metrics": [
      { "value": "Patent", "label": "Published IP (App 202621011705 A)" },
      { "value": "ML-Driven", "label": "Cycle Variance & PCOS Risk Modeling" },
      { "value": "High", "label": "Predictive Accuracy on Irregular Cycles" },
      { "value": "Preventive", "label": "Non-Diagnostic Health & Wellness Focus" }
    ],
    "palette": {
      "via": "#572044",
      "to": "#08070d",
      "accent": "#ed82a8",
      "from": "#180817"
    },
    "motif": "flow"
  },
  {
    "id": "agriculture",
    "status": "Completed",
    "github": "https://github.com/Rudrakshi2006/Agriculture_Price_Prediction",
    "context": "Group project · IEEE TEMSMET 2025 research",
    "title": "Agriculture Price Prediction",
    "year": "2026",
    "genre": "Machine Learning • IEEE Research",
    "logline": "Stacking ensemble learning to forecast agricultural commodity prices using historical market data, engineered features and model evaluation.",
    "stack": [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Pandas"
    ],
    "build": [
      "Stacking ensemble learning to forecast agricultural commodity prices using historical market data, engineered features and model evaluation.",
      "First-author research presented at IEEE TEMSMET 2025 and published on IEEE Xplore in 2026. DOI: 10.1109/TEMSMET65536.2025.11467327."
    ],
    "features": [
      "Historical market-data preprocessing",
      "Stacking ensemble models",
      "Hyperparameter tuning and evaluation",
      "First-author IEEE publication and patent application"
    ],
    "metrics": [
      { "value": "IEEE", "label": "First-Author Paper (TEMSMET 2025 / Xplore)" },
      { "value": "Patent", "label": "Published IP (App 202621048319 A)" },
      { "value": "Stacking", "label": "Ensemble Outperforming Standalone Regressors" },
      { "value": "Multi-Crop", "label": "Historical Commodity Market Forecasting" }
    ],
    "palette": {
      "via": "#572044",
      "to": "#08070d",
      "accent": "#46e3a8",
      "from": "#180817"
    },
    "motif": "flow"
  },
  {
    "id": "trendplus",
    "status": "Completed",
    "github": "https://github.com/Rudrakshi2006/TrendPulse",
    "title": "TrendPlus",
    "year": "2026",
    "genre": "Data Analytics • Intelligent Insights",
    "logline": "Trend analysis platform for discovering emerging patterns and transforming complex data into organized, actionable research insights.",
    "stack": [
      "Data Analytics",
      "Automation",
      "Visualization"
    ],
    "build": [
      "Trend analysis platform for discovering emerging patterns and transforming complex data into organized, actionable research insights.",
      "Designed around practical applications, iterative improvement and clear user-focused outcomes."
    ],
    "features": [
      "Trend discovery",
      "Pattern analysis",
      "Organized insights and research"
    ],
    "metrics": [
      { "value": "Real-Time", "label": "Emerging Pattern & Trend Ingestion" },
      { "value": "Automated", "label": "Statistical Aggregation Pipeline" },
      { "value": "Visual", "label": "Interactive Dashboards & Insights" },
      { "value": "Scalable", "label": "Multi-Domain Data Trend Processing" }
    ],
    "palette": {
      "via": "#572044",
      "to": "#08070d",
      "accent": "#ffb547",
      "from": "#180817"
    },
    "motif": "flow"
  },
  {
    "id": "lungtwin",
    "status": "Completed",
    "github": "https://github.com/Rudrakshi2006/LungTwin_V2",
    "context": "Group project",
    "title": "LungTwin",
    "year": "2026",
    "genre": "HealthTech • Digital Twin • Visualization",
    "logline": "AI-assisted lung digital twin concept for visualizing anatomical structures and exploring disease-related changes for medical education and research.",
    "stack": [
      "Medical Imaging",
      "3D Visualization",
      "AI/ML"
    ],
    "build": [
      "AI-assisted lung digital twin concept for visualizing anatomical structures and exploring disease-related changes for medical education and research.",
      "Designed around practical applications, iterative improvement and clear user-focused outcomes."
    ],
    "features": [
      "Lung digital representation",
      "Anatomical visualization",
      "Exploration of computational modelling"
    ],
    "metrics": [
      { "value": "3D", "label": "High-Fidelity Anatomical Visualization" },
      { "value": "Digital Twin", "label": "Computational Pathology Exploration" },
      { "value": "AI-Guided", "label": "Disease Progression Simulation Concept" },
      { "value": "EdTech", "label": "Medical Student & Clinical Training Utility" }
    ],
    "palette": {
      "via": "#572044",
      "to": "#08070d",
      "accent": "#4cc9ff",
      "from": "#180817"
    },
    "motif": "flow"
  },
  {
    "id": "sit-chatbot",
    "status": "Completed",
    "github": "https://github.com/Rudrakshi2006/student-faq-chatbot",
    "title": "SIT Chatbot",
    "year": "2026",
    "genre": "Campus • NLP • Chatbot",
    "logline": "Conversational college information assistant for questions about academics, admissions, facilities, departments and institutional services.",
    "stack": [
      "NLP",
      "Chatbot",
      "Web Application"
    ],
    "build": [
      "Conversational college information assistant for questions about academics, admissions, facilities, departments and institutional services.",
      "Designed around practical applications, iterative improvement and clear user-focused outcomes."
    ],
    "features": [
      "Natural-language questions",
      "Student and visitor support",
      "Campus information access"
    ],
    "metrics": [
      { "value": "24/7", "label": "Instant Student & Visitor Information Access" },
      { "value": "Intent-Based", "label": "NLP Natural Language Query Routing" },
      { "value": "Campus-Wide", "label": "Admissions, Academics & Facility Coverage" },
      { "value": "Low Latency", "label": "Real-Time College FAQ Resolution" }
    ],
    "palette": {
      "via": "#572044",
      "to": "#08070d",
      "accent": "#b98bff",
      "from": "#180817"
    },
    "motif": "flow"
  },
  {
    "id": "learning-path",
    "status": "Completed",
    "github": "https://github.com/Rudrakshi2006/HCL_hack",
    "context": "HCL hackathon · group project",
    "title": "Personalized Learning Path Recommender",
    "year": "2026",
    "genre": "Completed • HCL Hackathon • NLP • Recommender",
    "logline": "Semantic retrieval system ranking Top-10 relevant learning paths from learner reviews using embedding-based matching and multi-stage candidate ranking.",
    "stack": [
      "Python",
      "NLP",
      "FAISS",
      "BM25",
      "RRF",
      "Cross-Encoder"
    ],
    "build": [
      "Semantic retrieval system ranking Top-10 relevant learning paths from learner reviews using embedding-based matching and multi-stage candidate ranking.",
      "Competition dataset: approximately 109,776 training reviews over 80 courses, plus 10,977 test reviews."
    ],
    "features": [
      "Sentence embeddings and vector similarity",
      "Dense and lexical retrieval",
      "Reciprocal Rank Fusion",
      "Cross-encoder reranking",
      "Macro-recall oriented evaluation"
    ],
    "metrics": [
      { "value": "120K+", "label": "Course Reviews Analyzed (HCL Dataset)" },
      { "value": "Top-10", "label": "Personalized Multi-Stage Learning Paths" },
      { "value": "Hybrid", "label": "Dense (FAISS) + Lexical (BM25) Retrieval" },
      { "value": "RRF + Rerank", "label": "Reciprocal Rank Fusion & Cross-Encoder" }
    ],
    "palette": {
      "via": "#572044",
      "to": "#08070d",
      "accent": "#ffb547",
      "from": "#180817"
    },
    "motif": "flow"
  },
  {
    "id": "docflow",
    "title": "DocFlow — Intelligent Document Processing & Automation SaaS",
    "year": "2026",
    "status": "In Progress",
    "github": "https://github.com/Rudrakshi2006/DocFlow",
    "context": "Group project",
    "genre": "In Progress • SaaS • Document AI • Group",
    "logline": "AI-powered document processing SaaS with asynchronous extraction, secure storage, human review and structured exports.",
    "stack": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Celery",
      "Redis",
      "Cloudflare R2",
      "MinIO"
    ],
    "build": [
      "Automates high-volume processing of invoices, contracts and purchase orders through multimodal extraction and template-aware schemas.",
      "Uses MIME validation, SHA-256 deduplication, presigned object-storage URLs, asynchronous Celery jobs and field-level confidence checks.",
      "Human-in-the-loop split-screen review supports verification, JSON/CSV/DOCX exports, retries, dead-letter recovery and audit trails."
    ],
    "features": [
      "Bulk document upload and intelligent extraction",
      "Async queues, retries and deduplication",
      "Human review for uncertain fields",
      "Validation of subtotals, tax and dates",
      "Structured exports and audit trails"
    ],
    "metrics": [
      { "value": "Async Queue", "label": "Distributed Celery & Redis Processing" },
      { "value": "SHA-256", "label": "Deduplication & Presigned R2 Storage" },
      { "value": "HITL", "label": "Split-Screen Human-in-the-Loop Review" },
      { "value": "Automated", "label": "Multimodal Invoice & PO Data Extraction" }
    ],
    "palette": {
      "via": "#254758",
      "to": "#08070d",
      "accent": "#46e3a8",
      "from": "#091522"
    },
    "motif": "flow"
  },
  {
    "id": "eklink",
    "status": "In Progress",
    "title": "EkLink — Unified Smart Campus Ecosystem",
    "year": "2026",
    "genre": "In Progress • Smart Campus • SSO",
    "logline": "One identity, five connected campus applications: TemplateOS, Infivoice, ApproveIt, Attendie and SlotIt, linked by SSO and role-based access.",
    "stack": [
      "SSO",
      "RBAC",
      "Workflow Automation",
      "Web Apps"
    ],
    "build": [
      "One identity, five connected campus applications: TemplateOS, Infivoice, ApproveIt, Attendie and SlotIt, linked by SSO and role-based access.",
      "Architecture and initial development are underway; planned features should not be interpreted as completed."
    ],
    "features": [
      "TemplateOS: documents and reports",
      "Infivoice: invoices and finance workflows",
      "ApproveIt: multi-stage permissions",
      "Attendie: attendance requests and events",
      "SlotIt: classroom and lab allocation"
    ],
    "metrics": [
      { "value": "5 Apps", "label": "Unified TemplateOS, Infivoice, Attendie & More" },
      { "value": "Single SSO", "label": "Centralized Identity & Role-Based Access" },
      { "value": "Zero Duplication", "label": "Integrated Campus Permissions & Data" },
      { "value": "End-to-End", "label": "Paperless Workflow & Resource Automation" }
    ],
    "palette": {
      "via": "#572044",
      "to": "#08070d",
      "accent": "#ed82a8",
      "from": "#180817"
    },
    "motif": "flow"
  }
];

export const achievements = [
  {"id":"first-year-topper","title":"First-Year Academic Topper","org":"Symbiosis Institute of Technology, Nagpur","detail":"Recognized as first-year academic topper with an SGPA of 9.45.","laurel":"Academic Excellence"},
  {
    "id": "ieee-paper",
    "title": "IEEE First-Author Paper",
    "org": "IEEE TEMSMET 2025",
    "detail": "Agricultural crop price prediction research presented at IEEE TEMSMET 2025 and published in IEEE Xplore in 2026.",
    "laurel": "Research Publication",
    "link": "https://doi.org/10.1109/TEMSMET65536.2025.11467327"
  },
  {
    "id": "agri-patent",
    "link": "/documents/Agriculture_Patent_Publication.pdf",
    "title": "Agriculture Price Patent",
    "org": "India · 202621048319 A · Published 12 Jun 2026",
    "detail": "A Stacking Ensemble Machine Learning System and Method for Agricultural Crop Price Prediction.",
    "laurel": "Patent Application"
  },
  {
    "id": "cycle-patent",
    "link": "/documents/CycleCura_Patent_Publication.pdf",
    "title": "CycleCura Patent",
    "org": "India · 202621011705 A · Published 20 Mar 2026",
    "detail": "Machine Learning Based Personalized Menstrual Cycle Prediction and PCOS Risk Assessment System.",
    "laurel": "Patent Application"
  },
  {
    "id": "internships",
    "title": "Two Internships",
    "org": "MainCraft Technologies • Elevate Labs",
    "detail": "Hands-on experience in data analytics, machine learning, and web development during 2026.",
    "laurel": "Industry Experience"
  },
  {
    "id": "dual-degree",
    "title": "Two Degree Tracks",
    "org": "SIT Nagpur • IIT Madras",
    "detail": "Pursuing B.Tech in Computer Science and Engineering and an online B.S. in Data Science and Applications.",
    "laurel": "Academics"
  }
];

export const certifications = [
  {
    "name": "Agentic AI: From Prompt to Protocols to Production",
    "issuer": "Udemy",
    "date": "2026-08-11",
    "link": "/certificates/credential_1.pdf"
  },
  {
    "name": "Python Programming with Red Hat (AD141)",
    "issuer": "Red Hat Academy",
    "date": "2025-03-31",
    "link": "/certificates/credential_2.pdf"
  },
  {
    "name": "Data Structures and Algorithms using Python \u2013 Part 1",
    "issuer": "Infosys Springboard",
    "date": "2025-10-18",
    "link": "/certificates/credential_3.pdf"
  },
  {
    "name": "Red Hat System Administration I (RH124)",
    "issuer": "Red Hat Academy",
    "date": "2026-03-06",
    "link": "/certificates/credential_4.pdf"
  },
  {
    "name": "Network Automation with Red Hat Ansible Automation Platform",
    "issuer": "Red Hat Academy",
    "date": "2026-08-03",
    "link": "/certificates/credential_5.pdf"
  },
  {
    "name": "Data Analyst 101",
    "issuer": "Google Cloud",
    "date": "",
    "link": "/certificates/credential_6.jpg"
  },
  {
    "name": "Introduction to Generative AI Studio",
    "issuer": "Google Cloud",
    "date": "",
    "link": "/certificates/credential_7.jpg"
  },
  {
    "name": "Hertie School Summer Program",
    "issuer": "Hertie School",
    "date": "",
    "link": "/certificates/credential_8.jpeg"
  }
];

export const skillCategories = [
  {
    "id": "languages",
    "title": "Languages",
    "subtitle": "Programming and web fundamentals",
    "skills": [
      {
        "name": "Python",
        "mono": "Py"
      },
      {
        "name": "C",
        "mono": "C"
      },
      {
        "name": "JavaScript",
        "mono": "Ja"
      },
      {
        "name": "SQL",
        "mono": "SQ"
      },
      {
        "name": "HTML",
        "mono": "HT"
      },
      {
        "name": "CSS",
        "mono": "CS"
      }
    ]
  },
  {
    "id": "ml",
    "title": "Machine Learning & Data",
    "subtitle": "Models, analysis and preprocessing",
    "skills": [
      {
        "name": "Scikit-learn",
        "mono": "Sc"
      },
      {
        "name": "XGBoost",
        "mono": "XG"
      },
      {
        "name": "Pandas",
        "mono": "Pa"
      },
      {
        "name": "NumPy",
        "mono": "Nu"
      },
      {
        "name": "Data Analytics",
        "mono": "Da"
      }
    ]
  },
  {
    "id": "backend",
    "title": "Backend & AI",
    "subtitle": "Applied to personal projects",
    "skills": [
      {
        "name": "FastAPI",
        "mono": "Fa"
      },
      {
        "name": "FAISS",
        "mono": "FA"
      },
      {
        "name": "Ollama",
        "mono": "Ol"
      },
      {
        "name": "RAG",
        "mono": "RA"
      },
      {
        "name": "LangGraph",
        "mono": "La"
      }
    ]
  },
  {
    "id": "databases",
    "title": "Databases",
    "subtitle": "Structured data and persistence",
    "skills": [
      {
        "name": "MySQL",
        "mono": "My"
      },
      {
        "name": "SQLite",
        "mono": "SQ"
      }
    ]
  },
  {
    "id": "tools",
    "title": "Developer Tools",
    "subtitle": "My everyday toolkit",
    "skills": [
      {
        "name": "Git",
        "mono": "Gi"
      },
      {
        "name": "GitHub",
        "mono": "Gi"
      },
      {
        "name": "VS Code",
        "mono": "VS"
      },
      {
        "name": "Google Colab",
        "mono": "Go"
      },
      {
        "name": "Jupyter Notebook",
        "mono": "Ju"
      }
    ]
  },
  {
    "id": "fundamentals",
    "title": "Core Computer Science",
    "subtitle": "Engineering foundations",
    "skills": [
      {
        "name": "Data Structures & Algorithms",
        "mono": "Da"
      },
      {
        "name": "Object-Oriented Programming",
        "mono": "Ob"
      }
    ]
  },
  {
    "id": "interests",
    "title": "Interests",
    "subtitle": "Building with purpose",
    "skills": [
      {
        "name": "Research",
        "mono": "Re"
      },
      {
        "name": "Machine Learning",
        "mono": "Ma"
      },
      {
        "name": "Data Science",
        "mono": "Da"
      },
      {
        "name": "Software Engineering",
        "mono": "So"
      }
    ]
  }
];

export const skillEvidence = {
  "Python": [
    "MemoryLens",
    "CycleCura",
    "Agriculture Price Prediction"
  ],
  "JavaScript": [
    "Elevate Labs web development internship",
    "JavaScript portfolio"
  ],
  "Scikit-learn": [
    "CycleCura",
    "Agriculture Price Prediction"
  ],
  "FAISS": [
    "MemoryLens",
    "Personalized Learning Path Recommender"
  ],
  "LangGraph": [
    "Research Topic Recommendation"
  ],
  "Git": [
    "Elevate Labs internship"
  ]
};

export const seasons = [
  {
    "number": 1,
    "title": "The Foundation",
    "period": "2024 – Present",
    "synopsis": "Pursuing two degree programs across engineering and data science",
    "episodes": [
      {
        "code": "S01 E01",
        "title": "A Computer Science Journey",
        "description": "B.Tech Computer Science & Engineering at SIT Nagpur, CGPA 8.81; expected graduation 2028.",
        "tags": [
          "Computer Science",
          "Research"
        ],
        "runtime": "2024 – Present",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      },
      {
        "code": "S01 E02",
        "title": "Beyond One Classroom",
        "description": "B.S. Data Science and Applications at IIT Madras (online), Diploma Level, CGPA 7.33.",
        "tags": [
          "Computer Science",
          "Research"
        ],
        "runtime": "2024 – Present",
        "palette": {
          "from": "#24060b",
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a"
        }
      }
    ]
  },
  {
    "number": 2,
    "title": "Exploring Machine Learning",
    "period": "Projects & Research",
    "synopsis": "Learning through applied ML, user-centric applications and data",
    "episodes": [
      {
        "code": "S02 E01",
        "title": "Price Forecasting",
        "description": "Stacking ensemble crop price prediction research with an IEEE publication and patent application.",
        "tags": [
          "Computer Science",
          "Research"
        ],
        "runtime": "Projects & Research",
        "palette": {
          "from": "#1c1003",
          "via": "#6b3c06",
          "to": "#0a0806",
          "accent": "#ffb547"
        }
      },
      {
        "code": "S02 E02",
        "title": "CycleCura",
        "description": "ML-powered menstrual-cycle prediction and non-diagnostic PCOS risk assessment; published patent application.",
        "tags": [
          "Computer Science",
          "Research"
        ],
        "runtime": "Projects & Research",
        "palette": {
          "from": "#1c1003",
          "via": "#6b3c06",
          "to": "#0a0806",
          "accent": "#ffb547"
        }
      },
      {
        "code": "S02 E03",
        "title": "MemoryLens",
        "description": "Private offline file search with local RAG and semantic retrieval.",
        "tags": [
          "Computer Science",
          "Research"
        ],
        "runtime": "Projects & Research",
        "palette": {
          "from": "#1c1003",
          "via": "#6b3c06",
          "to": "#0a0806",
          "accent": "#ffb547"
        }
      }
    ]
  },
  {
    "number": 3,
    "title": "Learning from Industry",
    "period": "2026",
    "synopsis": "From frontend development to real-world analytics work",
    "episodes": [
      {
        "code": "S03 E01",
        "title": "Elevate Labs",
        "description": "Web development internship, March–April 2026.",
        "tags": [
          "AI/ML",
          "Software"
        ],
        "runtime": "2026",
        "palette": {
          "from": "#04121f",
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff"
        }
      },
      {
        "code": "S03 E02",
        "title": "MainCraft Technologies",
        "description": "Data science & analytics internship, May–June 2026.",
        "tags": [
          "AI/ML",
          "Software"
        ],
        "runtime": "2026",
        "palette": {
          "from": "#04121f",
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff"
        }
      }
    ]
  },
  {
    "number": 4,
    "title": "Building Useful Technology",
    "period": "2026",
    "synopsis": "A broad mix of AI, campus tools, research and software",
    "episodes": [
      {
        "code": "S04 E01",
        "title": "Research Topic Recommender",
        "description": "Solo multi-agent research planning and feasibility-analysis project.",
        "tags": [
          "AI/ML",
          "Software"
        ],
        "runtime": "2026",
        "palette": {
          "from": "#120822",
          "via": "#3d1a6e",
          "to": "#07060c",
          "accent": "#b98bff"
        }
      },
      {
        "code": "S04 E02",
        "title": "TrendPlus & LungTwin",
        "description": "Exploring trend analytics and AI-supported medical visualization.",
        "tags": [
          "AI/ML",
          "Software"
        ],
        "runtime": "2026",
        "palette": {
          "from": "#120822",
          "via": "#3d1a6e",
          "to": "#07060c",
          "accent": "#b98bff"
        }
      },
      {
        "code": "S04 E03",
        "title": "SIT Chatbot",
        "description": "Student assistance and campus information through conversational AI.",
        "tags": [
          "AI/ML",
          "Software"
        ],
        "runtime": "2026",
        "palette": {
          "from": "#120822",
          "via": "#3d1a6e",
          "to": "#07060c",
          "accent": "#b98bff"
        }
      }
    ]
  },
  {
    "number": 5,
    "title": "What Comes Next",
    "period": "In progress",
    "synopsis": "Continuing to build and connect ideas",
    "episodes": [
      {
        "code": "S05 E01",
        "title": "EkLink",
        "description": "Five connected campus services under one identity and role-aware dashboard.",
        "tags": [
          "AI/ML",
          "Software"
        ],
        "runtime": "In progress",
        "palette": {
          "from": "#03150f",
          "via": "#0d5a40",
          "to": "#050a08",
          "accent": "#46e3a8"
        }
      },
      {
        "code": "S05 E02",
        "title": "Learning Path Recommender",
        "description": "Semantic Top-10 learning recommendation from reviews with hybrid retrieval.",
        "tags": [
          "AI/ML",
          "Software"
        ],
        "runtime": "In progress",
        "palette": {
          "from": "#03150f",
          "via": "#0d5a40",
          "to": "#050a08",
          "accent": "#46e3a8"
        }
      }
    ]
  }
];

export const topPicks = [
  {
    "label": "Research milestone",
    "title": "IEEE Publication",
    "detail": "First author • IEEE TEMSMET 2025",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Innovation",
    "title": "2 Patent Applications",
    "detail": "Published in 2026",
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    }
  },
  {
    "label": "Solo flagship",
    "title": "Research Topic Recommender",
    "detail": "Multi-agent gap validation and feasibility",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  {
    "label": "Offline AI",
    "title": "MemoryLens",
    "detail": "Local RAG without external APIs",
    "palette": {
      "from": "#120822",
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff"
    }
  },
  {
    "label": "Leadership",
    "title": "CycleCura",
    "detail": "Team Lead • ML prediction",
    "palette": {
      "from": "#03150f",
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8"
    }
  },
  {
    "label": "Practical experience",
    "title": "2 Internships",
    "detail": "Analytics and Web Development",
    "palette": {
      "from": "#24060b",
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a"
    }
  },
  {
    "label": "Parallel degrees",
    "title": "SIT + IIT Madras",
    "detail": "CSE and Data Science",
    "palette": {
      "from": "#1c1003",
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547"
    }
  },
  {
    "label": "Next big build",
    "title": "EkLink",
    "detail": "Five-app smart campus ecosystem",
    "palette": {
      "from": "#04121f",
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff"
    }
  },
  {
    "label": "Machine learning",
    "title": "Agriculture Prediction",
    "detail": "Ensemble-based price prediction",
    "palette": {
      "from": "#120822",
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff"
    }
  },
  {
    "label": "Growth",
    "title": "Learning by Building",
    "detail": "Software • Data • ML",
    "palette": {
      "from": "#03150f",
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8"
    }
  }
];

export const introSlides = [
  {
    "kicker": "Education",
    "title": "Two Academic Tracks",
    "lines": [
      "SIT Nagpur — B.Tech Computer Science",
      "IIT Madras — B.S. Data Science & Applications"
    ],
    "chips": [
      "CGPA 8.81",
      "CGPA 7.33"
    ]
  },
  {
    "kicker": "Skills",
    "title": "Software + Data Science",
    "lines": [
      "Python, Data Analysis, SQL, C, HTML, CSS",
      "Scikit-learn, XGBoost, Pandas, NumPy"
    ],
    "chips": [
      "Python",
      "Data Analysis",
      "ML"
    ]
  },
  {
    "kicker": "Experience",
    "title": "The Internship Arc",
    "lines": [
      "Elevate Labs — Web Development",
      "MainCraft — Data Science & Analytics"
    ],
    "chips": [
      "2026"
    ]
  },
  {
    "kicker": "Projects",
    "title": "Building Real Solutions",
    "lines": [
      "MemoryLens • CycleCura • TrendPlus",
      "LungTwin • SIT Chatbot • Agriculture Price Prediction"
    ],
    "chips": [
      "RAG",
      "ML",
      "Web"
    ]
  },
  {
    "kicker": "Research",
    "title": "Research & Innovation",
    "lines": [
      "IEEE TEMSMET 2025 first-author publication",
      "Two published patent applications"
    ],
    "chips": [
      "IEEE",
      "Patents"
    ]
  },
  {
    "kicker": "Flagship",
    "title": "Research Topic Recommender",
    "lines": [
      "Solo multi-agent research gap and feasibility system",
      "LangGraph • Semantic Scholar • OpenAlex • arXiv"
    ],
    "chips": [
      "Multi-agent AI"
    ]
  },
  {
    "kicker": "In Progress",
    "title": "What’s Next",
    "lines": [
      "EkLink — connected campus ecosystem",
      "Top-10 Personalized Learning Path Recommender"
    ],
    "chips": [
      "EkLink",
      "NLP"
    ]
  }
];

export const viewerProfiles = [
  {
    "id": "rudrakshi",
    "name": "Rudrakshi",
    "blurb": "The full series, in order",
    "color": "#e5132b",
    "order": [
      "about",
      "journey",
      "originals",
      "picks",
      "skills",
      "moments",
      "story"
    ]
  },
  {
    "id": "recruiter",
    "name": "Recruiter",
    "blurb": "Resume, achievements & skills first",
    "color": "#4cc9ff",
    "order": [
      "story",
      "moments",
      "skills",
      "originals",
      "about",
      "journey",
      "picks"
    ]
  },
  {
    "id": "developer",
    "name": "Developer",
    "blurb": "Projects, stack & GitHub first",
    "color": "#46e3a8",
    "order": [
      "originals",
      "skills",
      "journey",
      "moments",
      "about",
      "picks",
      "story"
    ]
  },
  {
    "id": "creative",
    "name": "Creative",
    "blurb": "The story arc & highlights first",
    "color": "#ffb547",
    "order": [
      "journey",
      "picks",
      "originals",
      "moments",
      "about",
      "skills",
      "story"
    ]
  }
];

export const sectionMeta = {about: {
  "nav": "About",
  "card": "About Me",
  "meta": "The Pilot • Education & training",
  "palette": {
    "from": "#120822",
    "via": "#3d1a6e",
    "to": "#07060c",
    "accent": "#b98bff"
  }
},journey: {
  "nav": "Journey",
  "card": "My Journey",
  "meta": "5 Seasons • 12 Episodes",
  "palette": {
    "from": "#1c1003",
    "via": "#6b3c06",
    "to": "#0a0806",
    "accent": "#ffb547"
  }
},originals: {
  "nav": "Originals",
  "card": "My Projects",
  "meta": "9 Originals",
  "palette": {
    "from": "#24060b",
    "via": "#6e0d1d",
    "to": "#09070a",
    "accent": "#ff3d5a"
  }
},picks: {
  "nav": "Top Picks",
  "card": "Top Picks",
  "meta": "Top 10 highlights",
  "palette": {
    "from": "#03150f",
    "via": "#0d5a40",
    "to": "#050a08",
    "accent": "#46e3a8"
  }
},skills: {
  "nav": "Skills",
  "card": "My Skills",
  "meta": "7 Categories",
  "palette": {
    "from": "#04121f",
    "via": "#0f4c6e",
    "to": "#05080d",
    "accent": "#4cc9ff"
  }
},moments: {
  "nav": "Moments",
  "card": "My Achievements",
  "meta": "5 Moments",
  "palette": {
    "from": "#24060b",
    "via": "#6e0d1d",
    "to": "#09070a",
    "accent": "#ff3d5a"
  }
},story: {
  "nav": "Resume",
  "card": "The Full Story",
  "meta": "Resume preview",
  "palette": {
    "from": "#120822",
    "via": "#3d1a6e",
    "to": "#07060c",
    "accent": "#b98bff"
  }
}};
