import re
base = r'dszmnq_247960\源码\modules\01_config\co_post.ts'
s = open(base, encoding='utf-8').read()
print('len', len(s))
print('--- head 1200 ---')
print(s[:1200])
for tok in ('1500', '1600', '1001', '1101', '100100', '150000'):
    idxs = [m.start() for m in re.finditer(re.escape(tok), s)]
    print('tok', tok, 'count', len(idxs), 'first', idxs[:6])
