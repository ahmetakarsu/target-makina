import os
import re

def process_file(filepath):
    if "index.astro" in filepath and "makina-parkuru" not in filepath and "hizmetler" not in filepath:
        # Don't process homepage (src/pages/index.astro)
        if filepath.replace('\\', '/').endswith('src/pages/index.astro'):
            return

    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    changed = False
    
    # Patterns to match lines like " Hero ", "  ===== HERO =====  ", "  Intro ", etc.
    # Usually they are just text, no tags.
    pattern = re.compile(r'^\s*(?:[=-]*\s*[A-Za-z0-9_ ]+\s*[=-]*)\s*$')
    
    for line in lines:
        stripped = line.strip()
        
        # Don't remove empty lines or lines with HTML/JSX tags
        if not stripped or '<' in stripped or '>' in stripped or '{' in stripped or '}' in stripped or '---' in stripped or 'import' in stripped:
            new_lines.append(line)
            continue
            
        # If it's a short text like "Hero" or "Detail"
        if pattern.match(line):
            # Check if it looks like one of our target comments
            upper_stripped = stripped.upper().replace('=', '').strip()
            if upper_stripped in ['HERO', 'INTRO', 'DETAIL', 'PROCESS', 'ADVANTAGES', 'CAPABILITIES TABLE', 'MATERIALS', 'SURFACE TREATMENTS', 'CTA', 'FEATURES', 'OTHER MACHINES', 'STATS', 'CAPABILITIES CARDS', 'SPECS TABLE', 'SURFACE']:
                changed = True
                continue
                
        new_lines.append(line)

    if changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"Cleaned {filepath}")

for root, dirs, files in os.walk('src/pages'):
    for file in files:
        if file.endswith('.astro'):
            process_file(os.path.join(root, file))
