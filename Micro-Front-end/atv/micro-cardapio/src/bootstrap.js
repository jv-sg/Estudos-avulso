/**
 * bootstrap.js - Micro Cardápio
 * Monta o app standalone (para desenvolvimento/teste isolado).
 */
import React from "react";
import ReactDOM from "react-dom/client";
import CardapioApp from "./CardapioApp";
import "./styles/cardapio.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CardapioApp />
  </React.StrictMode>
);
