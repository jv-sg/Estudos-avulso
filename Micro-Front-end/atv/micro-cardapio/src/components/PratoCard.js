/**
 * PratoCard.js - Card de um prato do cardápio
 *
 * Componente reutilizável que exibe as informações de um prato:
 * emoji, nome, descrição, preço, categoria e botão de adicionar.
 */
import React, { useState } from "react";

const PratoCard = ({ prato, onAdicionar }) => {
  // Controla animação de clique no botão
  const [clicado, setClicado] = useState(false);

  const handleClick = () => {
    onAdicionar(prato);
    setClicado(true);
    // Remove animação após completar
    setTimeout(() => setClicado(false), 600);
  };

  return (
    <article className="prato-card">
      {/* Emoji / ícone do prato */}
      <div className="prato-emoji">{prato.emoji}</div>

      <div className="prato-info">
        {/* Badge de categoria */}
        <span className="prato-categoria">{prato.categoria}</span>

        {/* Nome e descrição */}
        <h3 className="prato-nome">{prato.nome}</h3>
        <p className="prato-descricao">{prato.descricao}</p>

        {/* Rodapé: preço + botão */}
        <div className="prato-footer">
          <span className="prato-preco">
            R$ {prato.preco.toFixed(2).replace(".", ",")}
          </span>
          <button
            className={`btn-adicionar ${clicado ? "btn-adicionar--clicado" : ""}`}
            onClick={handleClick}
            aria-label={`Adicionar ${prato.nome} ao pedido`}
          >
            {clicado ? "✓ Adicionado" : "+ Adicionar"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default PratoCard;
