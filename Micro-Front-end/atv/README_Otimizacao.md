# 🍽 Bistrô Moderno — Relatório de Otimização de Performance

## Descrição do Projeto

O **Bistrô Moderno** é uma aplicação de restaurante construída com arquitetura de **Micro Frontends**, integrando três aplicações React independentes via **Webpack Module Federation**:

| App | Porta | Responsabilidade |
|-----|-------|-----------------|
| `container` | 3000 | Orquestra os micro-frontends via `React.lazy` |
| `micro-cardapio` | 3001 | Listagem e filtragem de pratos |
| `micro-pedido` | 3002 | Gerenciamento do carrinho e pedido |

A comunicação entre os micros é feita via **Custom Events globais** (`window.dispatchEvent` / `window.addEventListener`), garantindo total desacoplamento entre os serviços.

---

## 🔴 Gargalos Identificados (Antes da Otimização)

### Métricas — Estado Inicial

| Métrica | Valor | Status |
|---------|-------|--------|
| **LCP** (Largest Contentful Paint) | 1,47 s | ⚠ Aceitável, mas com espaço para melhora |
| **CLS** (Cumulative Layout Shift) | 0,03 | ⚠ Ruído de layout visível ao usuário |
| **INP** (Interaction to Next Paint) | 112 ms | ⚠ Pico no elemento `div.micro-grid` |

![DevTools — Antes](./Antes_-_Performance_Google_Dev_Tools.png)
*Figura 1 — Google DevTools Performance antes da otimização*

### Gargalos Detalhados

#### 📁 1. Imagens em diretórios externos ao projeto
As imagens dos pratos eram carregadas a partir de URLs externas ou caminhos fora do projeto, aumentando a latência de rede, impedindo estratégias de cache eficientes e criando dependência de terceiros.

#### 📐 2. Dimensões de imagem excessivas
As imagens originais possuíam resoluções muito superiores ao necessário. Como são exibidas apenas como **miniaturas de referência** dos pratos (nunca ampliadas em tela cheia), a resolução exagerada gerava transferência de dados desnecessária.

#### 🖼 3. Formato PNG / JPG
Todos os assets eram servidos em formatos legados (PNG ou JPG), sem compressão moderna. Isso resultava em arquivos maiores sem nenhum ganho perceptível de qualidade visual para o contexto de uso.

#### ⚡ 4. CLS elevado na notificação de carrinho
O elemento de notificação *"item adicionado"* era **criado dinamicamente** no DOM ao adicionar um item e **removido** ao expirar. Essa inserção e remoção de nós causava recálculos de layout (*reflow*), elevando o CLS e gerando o pico de **INP de 112 ms** identificado no elemento `div.micro-grid`.

---

## ✅ Melhorias Aplicadas

### Métricas — Após Otimização

| Métrica | Antes | Depois | Ganho |
|---------|-------|--------|-------|
| **LCP** | 1,47 s | **0,20 s** | ↓ 86% — 7,3× mais rápido |
| **CLS** | 0,03 | **0,02** | ↓ 33% — menos layout shift |
| **INP** | 112 ms | **24 ms** | ↓ 79% — 4,7× mais responsivo |

![DevTools — Depois](./Depois.png)
*Figura 2 — Google DevTools Performance após a otimização*

### Melhorias Detalhadas

#### 📁 1. Centralização das imagens no projeto
Todas as imagens foram movidas para o diretório **`micro-cardapio/public/src/img/`**, dentro do próprio micro-frontend Cardápio. Benefícios:
- Elimina dependência de URLs externas
- Permite cache local eficiente
- Facilita manutenção e versionamento
- Garante disponibilidade mesmo sem conectividade externa

#### 📐 2. Redimensionamento para 250 × 250 px
As imagens foram redimensionadas para **250 × 250 pixels** — tamanho adequado ao seu uso exclusivo como miniaturas. O redimensionamento reduziu o peso individual de cada imagem e contribuiu diretamente para a queda do **LCP de 1,47 s → 0,20 s**.

#### 🖼 3. Conversão para WebP
Todos os assets foram convertidos de PNG/JPG para o formato moderno **WebP**. Resultados:
- Redução de tamanho de 30 a 80% em relação ao PNG equivalente
- Qualidade visual equivalente ou superior
- Suporte nativo nos principais navegadores modernos

#### ⚡ 4. Notificação estática com visibilidade dinâmica
O elemento de notificação foi refatorado de **criação/remoção dinâmica** para um **elemento estático sempre presente no DOM**, alternando apenas entre `visibility: hidden` e `visibility: visible`:

```css
/* Antes — criado e removido do DOM */
/* JS inseria e removia o elemento, causando reflow */

/* Depois — sempre no DOM, apenas visibilidade muda */
.notificacao {
  visibility: hidden;  /* estado padrão */
  opacity: 0;
  transition: opacity 0.3s ease;
}

.notificacao.visivel {
  visibility: visible;
  opacity: 1;
}
```

Essa mudança eliminou completamente o *reflow* causado pela inserção/remoção de nós, reduzindo o **INP de 112 ms → 24 ms** e o **CLS de 0,03 → 0,02**.

---

## 📊 Comparativo Visual — Antes × Depois

| | Antes | Depois |
|--|-------|--------|
| **Screenshot** | ![Antes](./Antes_-_Performance_Google_Dev_Tools.png) | ![Depois](./Depois.png) |
| **LCP element** | `img` (externa, grande) | `p.vazio-descricao` (local, WebP) |
| **INP worst** | `div.micro-grid` — 112 ms | `pointer` — 24 ms |
| **CLS worst cluster** | 1 shift | 4 shifts (menores) |
| **Interações > 40 ms** | Sim (múltiplas) | Nenhuma |

---

## 🛠 Tecnologias

- **React 18** — UI declarativa com hooks
- **Webpack 5** — Module Federation nativo
- **Babel** — transpilação JSX/ES2022
- **CSS customizado** — sem framework, variáveis CSS para theming
- **WebP** — formato moderno de imagem (conversão aplicada na otimização)

---

## 🚀 Como Executar

```bash
# Terminal 1 — Micro Cardápio (porta 3001)
cd micro-cardapio && npm install && npm start

# Terminal 2 — Micro Pedido (porta 3002)
cd micro-pedido && npm install && npm start

# Terminal 3 — Container (porta 3000)
cd container && npm install && npm start
```

Acesse: **http://localhost:3000**

> ⚠️ Os micros (3001 e 3002) precisam estar em execução antes de iniciar o container.
