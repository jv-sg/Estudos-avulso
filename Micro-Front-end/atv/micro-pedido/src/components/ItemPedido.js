import React from "react";

const ItemPedido = ({ item, onRemover, onAlterarQuantidade }) => {
  const { prato, quantidade } = item;
  const subtotal = prato.preco * quantidade;

  return (
    <div className="item-pedido">
      {/* Emoji e nome */}
      <div className="item-identificacao">
        <span className="item-emoji">{prato.emoji}</span>
        <div className="item-textos">
          <span className="item-nome">{prato.nome}</span>
          <span className="item-unitario">
            R$ {prato.preco.toFixed(2).replace(".", ",")} / un
          </span>
        </div>
      </div>

      {/* Controles de quantidade */}
      <div className="item-controles">
        <button
          className="qty-btn"
          onClick={() => onAlterarQuantidade(prato.id, -1)}
          aria-label="Diminuir quantidade"
        >
          −
        </button>
        <span className="qty-valor">{quantidade}</span>
        <button
          className="qty-btn"
          onClick={() => onAlterarQuantidade(prato.id, +1)}
          aria-label="Aumentar quantidade"
        >
          +
        </button>
      </div>

      {/* Subtotal e botão remover */}
      <div className="item-direito">
        <span className="item-subtotal">
          R$ {subtotal.toFixed(2).replace(".", ",")}
        </span>
        <button
          className="btn-remover"
          onClick={() => onRemover(prato.id)}
          aria-label={`Remover ${prato.nome} do pedido`}
          title="Remover item"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ItemPedido;