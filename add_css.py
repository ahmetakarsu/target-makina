import os
import glob
import re

pattern = 'public/assets/inst/**/sections/**/index.css'
css_files = glob.glob(pattern, recursive=True)

links = []
# Also include common css
links.append('    <link rel="stylesheet" href="/assets/tpl-common/common/css/swiper7.css">')
links.append('    <link rel="stylesheet" href="/assets/tpl-common/common/css/jquery.fancybox.css">')
links.append('    <link rel="stylesheet" href="/assets/tpl-common/common/css/form.css">')

for f in css_files:
    url = '/' + f.replace('public\\\\', '').replace('public/', '').replace('\\\\', '/')
    links.append(f'    <link rel="stylesheet" href="{url}">')

head_content = '<Fragment slot="head">\n' + '\n'.join(links) + '\n  </Fragment>'

path = 'src/pages/hizmetler/index.astro'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# find fragment
m = re.search(r'<Fragment slot="head">.*?</Fragment>', content, flags=re.DOTALL)
if m:
    content = content.replace(m.group(0), head_content)
else:
    # insert before <section class="small-banner-guanxiang">
    content = content.replace('<section class="small-banner-guanxiang">', head_content + '\n  <section class="small-banner-guanxiang">')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
