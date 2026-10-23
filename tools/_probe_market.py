import re, os
base = r'dszmnq_247960\源码\modules\01_config'
p = os.path.join(base, 'co_market.ts')
s = open(p, encoding='utf-8').read()
print('len', len(s))
print('--- head 900 ---')
print(s[:900])
ids = re.findall(r'\bk(\d+): \{', s)
print('rows', len(ids), ids[:8], ids[-8:])
rows = re.findall(r'k(\d+): \{(.*?)\n        \}', s, re.S)
print('parsed', len(rows))
for k, body in rows[:4]:
    print('ROW', k, ' '.join(body.split()))
print('...')
for k, body in rows[-3:]:
    print('ROW', k, ' '.join(body.split()))
# region values
regs = set(re.findall(r'region: ([^,\n]+)', s))
print('region values', list(regs)[:20], 'count', len(regs))
names = re.findall(r'name: "([^"]*)"', s)
print('name sample', names[:12], 'unique', len(set(names)))
