#!/usr/bin/env bash

set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:3000}"
ARCHIVO="${ARCHIVO:-demo.txt}"

if ! command -v curl >/dev/null 2>&1; then
  echo "curl no está instalado" >&2
  exit 1
fi

endpoints=(
  "/comprimir/gof/rar"
  "/comprimir/gof/zip"
  "/comprimir/duck-typing/7z"
  "/comprimir/duck-typing/rar"
  "/comprimir/duck-typing/zip"
  "/comprimir/funcional/rar"
  "/comprimir/funcional/zip"
  "/comprimir/diccionario/rar"
  "/comprimir/diccionario/zip"
  "/comprimir/diccionario/7z"
)

for endpoint in "${endpoints[@]}"; do
  echo "=== ${endpoint} ==="
  response=$(curl -sS -X POST "${BASE_URL}${endpoint}" \
    -H 'Content-Type: application/json' \
    -d "{\"archivo\":\"${ARCHIVO}\"}")
  echo "${response}"
  echo
done