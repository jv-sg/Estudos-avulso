import React from "react";

const FiltroCategoria = ({ categorias, ativa, onChange }) => {
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