/**
 * bootstrap.js - Container App
 *
 * Este arquivo existe para que o Module Federation possa carregar
 * os módulos compartilhados (shared) de forma assíncrona antes de
 * inicializar a aplicação. É um padrão obrigatório quando se usa
 * singleton em libs compartilhadas como o React.
 */
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
