import io, re
s = io.open(r'dszmnq_247960\源码\modules\01_config\co_market.ts', encoding='utf-8').read()
rows = re.findall(r'k(\d+): \{(.*?)\n        \}', s, re.S)
print('rows', len(rows))
print('ROW0', ' '.join(rows[0][1].split()))
print('ROW1', ' '.join(rows[1][1].split()))
print('LAST', ' '.join(rows[-1][1].split()))
print('provinces', len(set(re.findall(r'prov: "([^"]+)"', s))))
print('types', len(set(re.findall(r'type: (\d+)', s))))
