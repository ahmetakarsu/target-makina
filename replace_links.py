import re

filepath = "src/pages/index.astro"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace href="/hizmetler/..." with href="/iletisim/"
content = re.sub(r'href="/hizmetler/[^"]*"', 'href="/iletisim/"', content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced /hizmetler/ links with /iletisim/ in index.astro")
