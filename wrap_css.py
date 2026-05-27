import os

files_to_wrap = [
    'public/css/base.css',
    'public/assets/tpl-common/common/css/bootstrap.min.css'
]

for filepath in files_to_wrap:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already wrapped
    if not content.startswith('@layer base {'):
        new_content = f"@layer base {{\n{content}\n}}"
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Wrapped {filepath} in @layer base")
