# 🍽 Bistrô Moderno — Micro Frontends com Webpack Module Federation

Aplicação de restaurante construída com arquitetura de **Micro Frontends**, integrando três aplicações React independentes via **Webpack Module Federation**.

---

## 📐 Arquitetura

```
micro-frontends/
├── container/          → App principal (porta 3000)
│   ├── src/
│   │   ├── App.js               # Orquestra os micros via React.lazy
│   │   ├── bootstrap.js         # Entry async (padrão Module Federation)
│   │   ├── index.js             # Entry point
│   │   ├── components/
│   │   │   ├── Header.js        # Cabeçalho global
│   │   │   ├── LoadingSpinner.js # Fallback de carregamento
│   │   │   └── ErrorBoundary.js # Captura erros dos micros remotos
│   │   └── styles/
│   │       └── global.css
│   ├── public/index.html
│   └── webpack.config.js        # Declara os remotes
│
├── micro-cardapio/     → Micro de listagem de pratos (porta 3001)
│   ├── src/
│   │   ├── CardapioApp.js       # Componente exposto via Module Federation
│   │   ├── bootstrap.js
│   │   ├── index.js
│   │   ├── components/
│   │   │   ├── PratoCard.js     # Card de prato reutilizável
│   │   │   └── FiltroCategoria.js # Filtro por categoria
│   │   ├── data/
│   │   │   └── pratos.js        # Dados do cardápio
│   │   └── styles/
│   │       └── cardapio.css
│   ├── public/index.html
│   └── webpack.config.js        # Expõe CardapioApp
│
└── micro-pedido/       → Micro de gerenciamento do pedido (porta 3002)
    ├── src/
    │   ├── PedidoApp.js         # Componente exposto via Module Federation
    │   ├── bootstrap.js
    │   ├── index.js
    │   ├── components/
    │   │   ├── ItemPedido.js    # Linha de item com controles
    │   │   ├── ResumoPedido.js  # Subtotal, taxa e total
    │   │   └── PedidoVazio.js   # Estado vazio
    │   └── styles/
    │       └── pedido.css
    ├── public/index.html
    └── webpack.config.js        # Expõe PedidoApp
```

---

## 🔗 Comunicação entre Micros

A comunicação entre `micro-cardapio` e `micro-pedido` é feita via **Custom Events globais** (`window`), mantendo total desacoplamento:

```
micro-cardapio                         micro-pedido
─────────────────────────────────────────────────────
[clique em "Adicionar"]
        │
        ▼
window.dispatchEvent(
  new CustomEvent('adicionar-item-pedido', {
    detail: { prato }
  })
)
        │
        ▼ (propagação via window)
        │
window.addEventListener(            ◄──┘
  'adicionar-item-pedido',
  (event) => { /* atualiza estado */ }
)
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm 9+

### Instalação e inicialização

**Opção 1 — Script automático:**
```bash
chmod +x start.sh
./start.sh
```

**Opção 2 — Manual (3 terminais separados):**

```bash
# Terminal 1 — Micro Cardápio (porta 3001) — inicie ANTES do container
cd micro-cardapio
npm install
npm start

# Terminal 2 — Micro Pedido (porta 3002) — inicie ANTES do container
cd micro-pedido
npm install
npm start

# Terminal 3 — Container (porta 3000)
cd container
npm install
npm start
```

Acesse: **http://localhost:3000**

> ⚠️ Os micros (3001 e 3002) precisam estar rodando antes de abrir o container.

---

## ⚙️ Como Funciona o Module Federation

### Container — consome os micros

```js
// container/webpack.config.js
new ModuleFederationPlugin({
  name: "container",
  remotes: {
    microCardapio: "microCardapio@http://localhost:3001/remoteEntry.js",
    microPedido:   "microPedido@http://localhost:3002/remoteEntry.js",
  },
  shared: { react: { singleton: true }, "react-dom": { singleton: true } }
})
```

### Micros — expõem seus componentes

```js
// micro-cardapio/webpack.config.js
new ModuleFederationPlugin({
  name: "microCardapio",
  filename: "remoteEntry.js",
  exposes: {
    "./CardapioApp": "./src/CardapioApp",
  },
  shared: { react: { singleton: true }, "react-dom": { singleton: true } }
})
```

### Container — importa os componentes remotos

```js
// container/src/App.js
const CardapioApp = React.lazy(() => import("microCardapio/CardapioApp"));
const PedidoApp   = React.lazy(() => import("microPedido/PedidoApp"));
```

---

## 🧩 Conceitos Aplicados

| Conceito | Onde |
|---|---|
| Module Federation | `webpack.config.js` de cada app |
| React.lazy + Suspense | `container/src/App.js` |
| Custom Events (comunicação) | `CardapioApp.js` → `PedidoApp.js` |
| Error Boundary | `container/src/components/ErrorBoundary.js` |
| Singleton shared libs | `shared.react.singleton: true` |
| Bootstrap async | `src/index.js` → `import('./bootstrap')` |
| Componentes reutilizáveis | `PratoCard`, `ItemPedido`, `ResumoPedido`, etc. |

---

## 🛠 Tecnologias

- **React 18** — UI declarativa com hooks
- **Webpack 5** — Module Federation nativo
- **Babel** — transpilação JSX/ES2022
- **CSS customizado** — sem framework, variáveis CSS para theming

---

## 📝 Notas de Desenvolvimento

- Cada micro pode ser desenvolvido e testado **isoladamente** na sua porta
- O padrão `index.js → import('./bootstrap')` é **obrigatório** para Module Federation funcionar corretamente com `singleton`
- O `publicPath` deve ser absoluto (ex: `http://localhost:3001/`) para os chunks remotos resolverem corretamente
