"""Build one offline-ready website. Python standard library only."""
from pathlib import Path
import base64
import json

root = Path(__file__).resolve().parent
shell = (root / 'src/shell.html').read_text(encoding='utf-8')
for marker, filename in [('SITE_STYLES', 'styles.css'), ('SITE_CONTENT', 'content.js'), ('SITE_EXAMPLES', 'examples.js'), ('SITE_APP', 'app.js')]:
    content = (root / 'src' / filename).read_text(encoding='utf-8')
    if filename == 'examples.js':
        content += '\n' + (root / 'src/resources.js').read_text(encoding='utf-8')
    if filename == 'app.js':
        content = (root / 'src/resource-ui.js').read_text(encoding='utf-8') + '\n' + content
        content += '\n' + (root / 'src/workshop-overrides.js').read_text(encoding='utf-8')
    shell = shell.replace('/* ' + marker + ' */', content)
catalog = json.loads((root / 'downloads/workbooks.json').read_text(encoding='utf-8'))
workbooks = {}
for entry in catalog:
    workbooks[entry['id']] = {
        'filename': entry['filename'],
        'example': entry['example'],
        'base64': base64.b64encode((root / 'downloads' / entry['filename']).read_bytes()).decode('ascii')
    }
shell = shell.replace('/* SITE_WORKBOOKS */', 'const WORKBOOKS = ' + json.dumps(workbooks, ensure_ascii=False) + ';')
assert '/* SITE_' not in shell, 'Unresolved build marker'
(root / 'index.html').write_text(shell, encoding='utf-8')
print(f'Built {root / "index.html"} ({len(shell.encode("utf-8")):,} bytes)')
