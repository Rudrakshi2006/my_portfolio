from PIL import Image
import shutil
import os

src = 'photograph.png'
im = Image.open(src)
print('Source size:', im.size, im.mode)

os.makedirs('public/assets', exist_ok=True)

# Save photograph.png and portrait-transparent.png
shutil.copyfile(src, 'public/assets/photograph.png')
shutil.copyfile(src, 'public/assets/portrait-transparent.png')

# Generate resized webp files
for w in [1100, 720, 420]:
    h = int(im.height * (w / im.width))
    resized = im.resize((w, h), Image.Resampling.LANCZOS)
    out_path = f'public/assets/portrait-{w}.webp'
    resized.save(out_path, 'WEBP', quality=92)
    print(f'Generated {out_path}: {w}x{h}')

# Also generate og-image.jpg with dark background
bg = Image.new('RGB', (1200, 630), (7, 7, 10))
# resize portrait to fit height 600
p_h = 600
p_w = int(im.width * (p_h / im.height))
p_resized = im.resize((p_w, p_h), Image.Resampling.LANCZOS)
# paste at southeast
bg.paste(p_resized, (1200 - p_w, 30), p_resized)
bg.save('public/assets/og-image.jpg', 'JPEG', quality=88)
print('Generated og-image.jpg')
print('All asset photos replaced successfully with photograph.png!')
