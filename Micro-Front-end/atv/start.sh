#!/bin/bash
# start.sh - Inicializa todos os micros e o container em paralelo
# Uso: chmod +x start.sh && ./start.sh

set -e

echo ""
echo "🍽  Bistrô Moderno — Micro Frontends"
echo "══════════════════════════════════════"
echo ""

# Instala dependências de todos os projetos
echo "📦 Instalando dependências..."
echo ""

for dir in micro-cardapio micro-pedido container; do
  echo "  → $dir"
  (cd "$dir" && npm install --silent)
done

echo ""
echo "✅ Dependências instaladas!"
echo ""
echo "🚀 Iniciando servidores..."
echo ""
echo "  Micro Cardápio  →  http://localhost:3001"
echo "  Micro Pedido    →  http://localhost:3002"
echo "  Container App   →  http://localhost:3000"
echo ""
echo "══════════════════════════════════════"
echo ""

# Inicia micros em background e container em foreground
(cd micro-cardapio && npm start) &
CARDAPIO_PID=$!

(cd micro-pedido && npm start) &
PEDIDO_PID=$!

# Aguarda os micros iniciarem
sleep 4

# Container em foreground (Ctrl+C encerra tudo)
(cd container && npm start) &
CONTAINER_PID=$!

# Aguarda qualquer processo terminar
wait $CARDAPIO_PID $PEDIDO_PID $CONTAINER_PID

# Cleanup ao encerrar
trap "kill $CARDAPIO_PID $PEDIDO_PID $CONTAINER_PID 2>/dev/null" EXIT
