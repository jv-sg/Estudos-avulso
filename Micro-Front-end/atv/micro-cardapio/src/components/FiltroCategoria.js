/**
 * FiltroCategoria.js - Filtro de categorias do cardápio
 *
 * Componente reutilizável que exibe botões/chips para filtrar
 * os pratos por categoria. Recebe a lista de categorias como prop.
 */
import React from "react";

const FiltroCategoria = ({ categorias, ativa, onChange }) => {
  // Labels amigáveis para as categorias
  const labels = {
    todos: "🍽 Todos",
    entrada: "🥗 Entradas",
    principal: "🍖 Principais",
    sobremesa: "🍮 Sobremesas",
    bebida: "🥤 Bebidas",
  };

  return (
    <div className="filtro-wrapper">
      {categorias.map((cat) => (
        <button
          key={cat}
          className={`filtro-btn ${ativa === cat ? "filtro-btn--ativo" : ""}`}
          onClick={() => onChange(cat)}
        >
          {labels[cat] || cat}
        </button>
      ))}
    </div>
  );
};

export default FiltroCategoria;
