import re
p = r'dszmnq_247960\源码\modules\01_config\co_dep.ts'
s = open(p, encoding='utf-8').read()
ids = sorted({int(m.group(1)) for m in re.finditer(r'\bk(\d+):\s*\{', s)})
print('co_dep count', len(ids))
print('ids', ids)
print('has1501', 1501 in ids, 'has1502', 1502 in ids, 'has1601', 1601 in ids, 'has1602', 1602 in ids)
# print the branch rows and the last rows for format reference
for tok in ('1500', '1600', '1101', '2101'):
    m = re.search(r'\bk%s:\s*\{(.*?)\}' % tok, s, re.S)
    if m:
        print('ROW', tok, ' '.join(m.group(1).split()))
