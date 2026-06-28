#!/usr/bin/env bash

set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:3000}"
ARCHIVO="${ARCHIVO:-demo.txt}"

if ! command -v curl >/dev/null 2>&1; then
  echo "curl no está instalado" >&2
  exit 1
fi

endpoints=(
  "/clasica/rar"
  "/clasica/zip"
  "/duck-typing/7z"
  "/funcional/rar"
  "/funcional/zip"
  "/diccionario/rar"
  "/diccionario/zip"
  "/diccionario/7z"
)

for endpoint in "${endpoints[@]}"; do
  echo "=== ${endpoint} ==="
  response=$(curl -sS -X POST "${BASE_URL}${endpoint}" \
    -H 'Content-Type: application/json' \
    -d "{\"archivo\":\"${ARCHIVO}\"}")
  echo "${response}"
  echo
done