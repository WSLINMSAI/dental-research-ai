"""Build one offline-ready website. Python standard library only."""
from pathlib import Path

root = Path(__file__).resolve().parent
shell = (root / 'src/shell.html').read_text(encoding='utf-8')
for marker, filename in [('SITE_STYLES', 'styles.css'), ('SITE_CONTENT', 'content.js'), ('SITE_APP', 'app.js')]:
    shell = shell.replace('/* ' + marker + ' */', (root / 'src' / filename).read_text(encoding='utf-8'))
(root / 'index.html').write_text(shell, encoding='utf-8')
print(f'Built {root / "index.html"} ({len(shell.encode("utf-8")):,} bytes)')
