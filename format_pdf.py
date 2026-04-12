from pathlib import Path
from PyPDF2 import PdfReader
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch
import textwrap

wk = Path('C:/Users/danie/.openclaw/workspace')
francis_path = wk / 'Francisco Javier Moreno Araujo.pdf'
daniel_path = wk / 'Daniel Mondragon Bravo.pdf'
out_path = wk / 'Daniel Mondragon Bravo formato tcs.pdf'

# Read Francisco to get page size
freader = PdfReader(str(francis_path))
if len(freader.pages) == 0:
    raise SystemExit('Francisco file empty')
fpage = freader.pages[0]
mediabox = fpage.mediabox
page_width = float(mediabox.width)
page_height = float(mediabox.height)

# Extract text from Daniel
dreader = PdfReader(str(daniel_path))
text_pages = []
for p in dreader.pages:
    try:
        txt = p.extract_text() or ''
    except Exception:
        txt = ''
    text_pages.append(txt)
all_text = '\n\n'.join(text_pages).strip()

if not all_text:
    # fallback: copy pages directly (no reflow) — create a PDF that embeds the original pages
    # We'll just copy the file instead
    from shutil import copyfile
    copyfile(str(daniel_path), str(out_path))
    print('NO_TEXT_FALLBACK')
    raise SystemExit('No extractable text; output is a copy of original Daniel PDF')

# Create new PDF with same page size and simple layout
c = canvas.Canvas(str(out_path), pagesize=(page_width, page_height))
margin = 0.8 * inch
usable_width = page_width - 2 * margin
usable_height = page_height - 2 * margin
font_name = 'Helvetica'
font_size = 11
line_height = font_size * 1.35
c.setFont(font_name, font_size)

# Simple text flow
lines = []
# Estimate approx characters per line
approx_char_width = font_size * 0.6
max_chars = max(40, int(usable_width / approx_char_width))
for para in all_text.split('\n'):
    if not para.strip():
        lines.append('')
        continue
    wrapped = textwrap.wrap(para, width=max_chars)
    if not wrapped:
        lines.append('')
    else:
        lines.extend(wrapped)

x_text = margin
y = page_height - margin - font_size
lines_per_page = int(usable_height / line_height)
count = 0
for ln in lines:
    if count and count % lines_per_page == 0:
        c.showPage()
        c.setFont(font_name, font_size)
        y = page_height - margin - font_size
    c.drawString(x_text, y - (count % lines_per_page) * line_height, ln)
    count += 1

c.save()
print('DONE')
