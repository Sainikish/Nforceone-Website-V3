import os, glob, re

target_dir = r'..\NFO_VERSION 2'

print("=== 1. CHECKING COLOR SYSTEM (DES-001) in styles.css ===")
with open(os.path.join(target_dir, 'styles.css'), 'r', encoding='utf-8', errors='ignore') as f:
    css = f.read()

tokens = ['--nforce-red', '--nforce-dark-red', '--nforce-black', '--nforce-gray', 'prefers-reduced-motion']
for t in tokens:
    print(f'Token {t}: {"FOUND" if t in css else "MISSING"}')

print("\n=== 2. CHECKING PRODUCTS IN innovation-products.html (INNOV-001/002) ===")
with open(os.path.join(target_dir, 'innovation-products.html'), 'r', encoding='utf-8', errors='ignore') as f:
    prod_html = f.read()

products = [
    'QForce AI', 'AIKTRA', 'OneHR', 'NForce Arena', 'Pulse', 'Sync',
    'Tracktion', 'FlightOps', 'AuraFace', 'Modozo', 'Ask Navi', 'NForce RetailOps'
]
for p in products:
    print(f'Product {p}: {"FOUND" if p.lower() in prod_html.lower() else "MISSING"}')

print("\n=== 3. CHECKING TELECOM PILLARS in telecom.html (TEL-001/002) ===")
with open(os.path.join(target_dir, 'telecom.html'), 'r', encoding='utf-8', errors='ignore') as f:
    telecom_html = f.read()

pillars = ['OSS/BSS', 'Quality Engineering', 'AI & Customer Experience', 'Network & Field Operations', 'Data & Automation']
for pil in pillars:
    print(f'Telecom pillar {pil}: {"FOUND" if pil.lower() in telecom_html.lower() else "MISSING"}')

print("\n=== 4. CHECKING EMPLOYEE TESTIMONIAL / SUBMISSION (EMP-TEST-001/002/003) ===")
with open(os.path.join(target_dir, 'careers.html'), 'r', encoding='utf-8', errors='ignore') as f:
    careers_html = f.read()

emp_checks = ['submission', 'consent', 'testimonial', 'photo', 'upload']
for ec in emp_checks:
    print(f'Career check {ec}: {"FOUND" if ec in careers_html.lower() else "MISSING"}')

print("\n=== 5. CHECKING AI ASSISTANT / CHATBOT in app.js and index.html (CHAT-001 to 012) ===")
with open(os.path.join(target_dir, 'app.js'), 'r', encoding='utf-8', errors='ignore') as f:
    app_js = f.read()

chat_checks = ['chat', 'navi', 'assistant', 'fallback', 'telecom', 'products', 'lead']
for cc in chat_checks:
    print(f'Chatbot check {cc}: {"FOUND" if cc in app_js.lower() else "MISSING"}')
