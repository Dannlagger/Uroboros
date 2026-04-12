from pypdf import PdfReader
path = r'C:\Users\danie\.openclaw\workspace\Recursos\Manual de Marca - LATTICE.pdf'
reader = PdfReader(path)
chunks = []
for i, page in enumerate(reader.pages[:20]):
    txt = page.extract_text() or ''
    chunks.append(f'--- PAGE {i+1} ---\n{txt}')
print('\n'.join(chunks)[:30000])
