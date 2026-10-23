import sys, io
base = r'dszmnq_247960\源码\modules\01_config'
for fn in ('co_dep.ts', 'co_post.ts'):
    s = open(base + '\\' + fn, encoding='utf-8').read()
    print('=====', fn, 'len', len(s))
    for tok in ('1001', '1002', '1003', '1500', '1101', '1102'):
        idx = s.find('\n        %s: {' % tok)
        if idx < 0:
            idx = s.find('%s: {' % tok)
        print('  --', tok, 'idx', idx)
        if idx > 0:
            print('    ' + s[idx:idx + 800].replace('\n', ' ')[:800])
