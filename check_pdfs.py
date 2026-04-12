import sys
from pathlib import Path
try:
    import PyPDF2
except Exception as e:
    print('PYPDF2_MISSING')
    sys.exit(0)

files = [
    Path('C:/Users/danie/.openclaw/workspace/Daniel Mondragon Bravo.pdf'),
    Path('C:/Users/danie/.openclaw/workspace/Francisco Javier Moreno Araujo.pdf')
]
for f in files:
    out = {'file': str(f), 'exists': f.exists()}
    if not f.exists():
        print(out)
        continue
    try:
        reader = PyPDF2.PdfReader(str(f))
        out['pages'] = len(reader.pages)
        try:
            text = reader.pages[0].extract_text()
            out['first_page_text_snippet'] = (text or '').strip()[:200]
            out['text_extractable'] = bool(text and text.strip())
        except Exception as e:
            out['first_page_text_snippet'] = ''
            out['text_extractable'] = False
    except Exception as e:
        out['error'] = str(e)
    print(out)
