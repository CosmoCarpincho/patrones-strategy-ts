#!/usr/bin/env bash

set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:3000}"
ARCHIVO="${ARCHIVO:-demo.txt}"
ENDPOINT="${1:-}"

if ! command -v curl >/dev/null 2>&1; then
  echo "curl no está instalado" >&2
  exit 1
fi

if [[ -z "${ENDPOINT}" ]]; then
  echo "Uso: $0 /comprimir/gof/rar" >&2
  exit 1
fi

if [[ "${ENDPOINT}" != /* ]]; then
  ENDPOINT="/${ENDPOINT}"
fi

echo "=== ${ENDPOINT} ==="
curl -sS -X POST "${BASE_URL}${ENDPOINT}" \
  -H 'Content-Type: application/json' \
  -d "{\"archivo\":\"${ARCHIVO}\"}"
echo