#!/usr/bin/env bash
set -euo pipefail
for page in index.html gate/index.html; do
  grep -q '<meta name="viewport"' "$page"
  grep -q '<title>' "$page"
  grep -q 'styles.css' "$page"
done
grep -q 'https://box.spel.cc/' index.html
grep -q 'href="gate/"' index.html
grep -q 'https://github.com/spelcc/gate' gate/index.html
grep -q 'https://github.com/spelcc/winegold' index.html
grep -q 'curl -fsSL https://spel.cc/gate.sh | bash' gate/index.html
printf 'Static checks passed.\n'
