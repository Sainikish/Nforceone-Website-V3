import os, glob, re

files = glob.glob(r'..\NFO_VERSION 2\*.html')
for fpath in sorted(files):
    name = os.path.basename(fpath)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    print(f'=== {name} ({len(content)} bytes) ===')
    title = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
    print('Title:', title.group(1) if title else 'NO TITLE')
    h1 = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.IGNORECASE | re.DOTALL)
    if h1:
        clean_h1 = ' '.join(re.sub(r'<[^>]+>', '', h1.group(1)).split())
        print('H1:', clean_h1[:100])
    sections = re.findall(r'<section[^>]*id=[\"\'](.*?)[\"\']', content, re.IGNORECASE)
    print('Section IDs:', sections[:8])
    print()
