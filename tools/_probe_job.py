import re, os
base = r'dszmnq_247960\源码\modules\01_config'

# co_job rows
p = os.path.join(base, 'co_job.ts')
s = open(p, encoding='utf-8').read()
ids = sorted(int(m.group(1)) for m in re.finditer(r'\bk(\d+):\s*\{', s))
print('co_job ids', ids[:5], '...', ids[-5:], 'count', len(ids))
m = re.search(r'\bk1:\s*\{(.*?)\}', s, re.S)
print('row1', ' '.join(m.group(1).split()))
m = re.search(r'\bk63:\s*\{(.*?)\}', s, re.S)
print('row63', ' '.join(m.group(1).split()) if m else 'n/a')

# co_first job field range
p2 = os.path.join(base, 'co_first.ts')
s2 = open(p2, encoding='utf-8').read()
jobs = [int(x) for x in re.findall(r'job:\s*(\d+)', s2)]
print('co_first job refs: count', len(jobs), 'min', min(jobs) if jobs else '-', 'max', max(jobs) if jobs else '-')

for fn in ('co_edu.ts', 'co_pot.ts', 'co_amb.ts', 'co_danji.ts'):
    fp = os.path.join(base, fn)
    if not os.path.exists(fp):
        continue
    t = open(fp, encoding='utf-8').read()
    for key in ('job', 'jobId', 'job_id', 'jobid'):
        vals = [int(x) for x in re.findall(key + r':\s*(\d+)', t)]
        if vals:
            print(fn, key, 'count', len(vals), 'min', min(vals), 'max', max(vals))
