import os
import glob

replacements = {
    'index.html': '/',
    'capabilities.html': '/hizmetler/',
    '5-axis-cnc-machining.html': '/hizmetler/5-eksen-cnc/',
    'cnc-milling.html': '/hizmetler/cnc-frezeleme/',
    'cnc-turning.html': '/hizmetler/cnc-tornalama/',
    'components-assembly.html': '/hizmetler/parca-montaji/',
    'gear-customization.html': '/hizmetler/disli-imalati/',
    'sheet-metal-fabrication.html': '/hizmetler/sac-sekillendirme/',
    'resource.html': '/kaynaklar/',
    'case-studies.html': '/referanslar/',
    'automobile-components.html': '/referanslar/',
    'daily-consumable.html': '/referanslar/',
    'competitive-sports.html': '/referanslar/',
    'machinery-and-transmission.html': '/referanslar/',
    'materials.html': '/kaynaklar/',
    'surface-treatment.html': '/hizmetler/yuzey-isleme/',
    'faq.html': '/hakkimizda/sss/',
    'makina-parkuru.html': '/makina-parkuru/',
    'sodick-vl400q.html': '/makina-parkuru/sodick-vl400q/',
    'sodick-aq537l.html': '/makina-parkuru/sodick-aq537l/',
    'dmg-ecomill-600v.html': '/makina-parkuru/dmg-ecomill-600v/',
    'dmg-ecomill-70.html': '/makina-parkuru/dmg-ecomill-70/',
    'hexagon-cmm.html': '/makina-parkuru/hexagon-cmm/',
    'news.html': '/haberler/',
    'about-us.html': '/hakkimizda/',
    'contact-us.html': '/iletisim/',
    'blog.html': '/blog/',
    'privacy.html': '/gizlilik/',
    'assets/images/target-makina-logo.png': '/images/target-makina-logo.png',
    'assets/tpl-common/common/images/flags.png': '/assets/tpl-common/common/images/flags.png',
}

files = [
    'src/components/Header.astro',
    'src/components/Footer.astro',
    'src/components/Sidebar.astro',
    'src/components/QuotePopup.astro'
]

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements.items():
        # Replace href="old" with href="new"
        content = content.replace(f'"{old}"', f'"{new}"')
        content = content.replace(f"'{old}'", f"'{new}'")
        
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Links updated successfully")
