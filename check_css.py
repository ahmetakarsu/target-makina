import re

with open("public/css/base.css", "r", encoding="utf-8") as f:
    css = f.read()

print("img in base.css:")
matches = re.findall(r'(img\s*\{[^}]+\})', css)
for m in matches:
    print(m)
