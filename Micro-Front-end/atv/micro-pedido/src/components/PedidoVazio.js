import React from "react";

const PedidoVazio = () => {
  return (
    <div className="pedido-vazio">
      <span className="vazio-icone">🛒</span>
      <p className="vazio-titulo">Seu pedido está vazio</p>
      <p className="vazio-descricao">
        Escolha pratos no cardápio ao lado e eles aparecerão aqui.
      </p>
    </div>
  );
};

export default PedidoVazio;
