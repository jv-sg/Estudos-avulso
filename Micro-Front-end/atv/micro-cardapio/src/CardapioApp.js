import React, { useState } from "react";
import PratoCard from "./components/PratoCard";
import FiltroCategoria from "./components/FiltroCategoria";
import { pratos } from "./data/pratos";
import "./styles/cardapio.css";

const CardapioApp = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
  const [notificacao, setNotificacao] = useState(null);

  const handleAdicionarPrato = (prato) => {
    window.dispatchEvent(
      new CustomEvent("adicionar-item-pedido", {
        detail: { prato },
        bubbles: true,
      })
    );
    setNotificacao(prato.nome);
    setTimeout(() => setNotificacao(null), 2000);
  };

  const pratosFiltrados =
    categoriaAtiva === "todos"
      ? pratos
      : pratos.filter((p) => p.categoria === categoriaAtiva);

  const categorias = ["todos", ...new Set(pratos.map((p) => p.categoria))];

  return (
    <div className="cardapio-app">
      {/* Cabeçalho da seção */}
      <div className="cardapio-header">
        <h2 className="cardapio-titulo">Cardápio</h2>
        <span className="cardapio-count">{pratosFiltrados.length} pratos</span>
      </div>

      {/* Filtro por categorias */}
      <FiltroCategoria
        categorias={categorias}
        ativa={categoriaAtiva}
        onChange={setCategoriaAtiva}
      />

      {/* Toast de notificação */}
      {notificacao && (
        <div className="notificacao-toast">
          ✓ <strong>{notificacao}</strong> adicionado ao pedido
        </div>
      )}

      {/* Lista de pratos */}
      <div className="pratos-lista">
        {pratosFiltrados.map((prato) => (
          <PratoCard
            key={prato.id}
            prato={prato}
            onAdicionar={handleAdicionarPrato}
          />
        ))}
      </div>
    </div>
  );
};

export default CardapioApp;