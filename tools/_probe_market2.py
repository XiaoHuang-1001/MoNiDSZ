import re, os, json
base = r'dszmnq_247960\源码\modules\01_config'
p = os.path.join(base, 'co_market.ts')
s = open(p, encoding='utf-8').read()
rows = re.findall(r'k(\d+): \{(.*?)\n        \}', s, re.S)
print('co_market rows', len(rows))
for k, body in rows:
    b = ' '.join(body.split())
    print(' ', k, b)
