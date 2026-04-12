import zipfile, re
path = r'C:\Users\danie\.openclaw\workspace\Recursos\Contenido.docx'
with zipfile.ZipFile(path) as z:
    data = z.read('word/document.xml').decode('utf-8', errors='ignore')
text = re.sub(r'<w:tab[^>]*/>', '\t', data)
text = re.sub(r'</w:p>', '\n', text)
text = re.sub(r'<[^>]+>', '', text)
text = re.sub(r'\n\s*\n+', '\n', text)
print(text[:20000])
