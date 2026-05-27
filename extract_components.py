import re

def clean_html(html_str):
    return '\n'.join(line.rstrip(' \\') for line in html_str.split('\n'))

with open('public/js/layout.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Instead of regex with multiline dotall which can be tricky, 
# let's just find the start and end strings.

def extract_var(var_name, next_var):
    start_str = f"var {var_name} = '"
    start_idx = content.find(start_str)
    if start_idx == -1: return ""
    start_idx += len(start_str)
    
    if next_var:
        end_idx = content.find(f"var {next_var} =", start_idx)
    else:
        end_idx = content.find("var COMPONENT_CSS", start_idx)
        
    if end_idx == -1: return ""
    
    # Go back to find the closing quote and semicolon
    end_idx = content.rfind("';", start_idx, end_idx)
    if end_idx == -1: return ""
    
    raw = content[start_idx:end_idx]
    return clean_html(raw)

header = extract_var("HEADER_HTML", "FOOTER_HTML")
footer = extract_var("FOOTER_HTML", "SIDEBAR_HTML")
sidebar = extract_var("SIDEBAR_HTML", "POPUP_HTML")
popup = extract_var("POPUP_HTML", None)

with open('src/components/Header.astro', 'w', encoding='utf-8') as f:
    f.write('---\n---\n<header id="site-header">\n' + header + '\n</header>\n')

with open('src/components/Footer.astro', 'w', encoding='utf-8') as f:
    f.write('---\n---\n<footer id="site-footer">\n' + footer + '\n</footer>\n')

with open('src/components/Sidebar.astro', 'w', encoding='utf-8') as f:
    f.write('---\n---\n<div id="site-sidebar">\n' + sidebar + '\n</div>\n')

with open('src/components/QuotePopup.astro', 'w', encoding='utf-8') as f:
    f.write('---\n---\n<div id="quote-popup">\n' + popup + '\n</div>\n')

# Also, update layout.js to REMOVE the HTML strings and injection
# to avoid duplicating them on the client side!
new_layout = content

# Remove the HTML injection part
injection_start = new_layout.find('var header = document.getElementById(\'site-header\');')
injection_end = new_layout.find('initLazyLoading();')

if injection_start != -1 and injection_end != -1:
    new_layout = new_layout[:injection_start] + new_layout[injection_end:]

with open('public/js/layout.js', 'w', encoding='utf-8') as f:
    f.write(new_layout)

print('Success')
