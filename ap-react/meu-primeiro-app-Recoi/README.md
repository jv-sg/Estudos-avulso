# Meu Primeiro App

## Descrição

Meu Primeiro App é um projeto de aprendizado desenvolvido para estudar e praticar os fundamentos de React com Vite. Este projeto oferece um ambiente de desenvolvimento moderno e otimizado para criar aplicações React.

## Tecnologias Utilizadas

- **React** (v19.2.0) - Biblioteca JavaScript para construção de interfaces de usuário
- **Vite** (v7.2.4) - Build tool e dev server rápido e moderno
- **Node.js** - Ambiente de execução JavaScript
- **npm** ou **yarn** - Gerenciador de pacotes
- **ESLint** - Ferramenta de linting para manter a qualidade do código

### Plugins Utilizados
- **@vitejs/plugin-react** - Plugin oficial do Vite para React com suporte a Fast Refresh via Babel

## Como Rodar o Projeto Localmente

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn instalado

### Passo a Passo

1. **Clone ou navegue até a pasta do projeto:**
   ```bash
   cd ap-react/meu-primeiro-app
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```
   ou, se usar yarn:
   ```bash
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   ou:
   ```bash
   yarn dev
   ```

4. **Acesse a aplicação:**
   O servidor será executado em `http://localhost:5173` (a porta exata será exibida no terminal). Abra este endereço no seu navegador.

### Comandos Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com Hot Module Replacement (HMR)
- `npm run build` - Cria um build otimizado para produção
- `npm run lint` - Executa o ESLint para verificar a qualidade do código
- `npm run preview` - Visualiza o build de produção localmente

## Estrutura do Projeto

```
meu-primeiro-app/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Próximos Passos

Para expandir este projeto, você pode:
- Adicionar mais componentes React
- Integrar roteamento com React Router
- Implementar gerenciamento de estado com Context API ou Redux
- Adicionar TypeScript para melhor type safety
