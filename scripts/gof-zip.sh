#!/usr/bin/env bash

set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:3000}"
ARCHIVO="${ARCHIVO:-demo.txt}"

curl -sS -X POST "${BASE_URL}/comprimir/gof/zip" \
  -H 'Content-Type: application/json' \
  -d "{\"archivo\":\"${ARCHIVO}\"}"
echo
