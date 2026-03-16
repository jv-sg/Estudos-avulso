/**
 * ResumoPedido.js - Resumo financeiro e botão de confirmação
 *
 * Calcula e exibe subtotal, taxa de serviço e total final.
 * Componente reutilizável e isolado da lógica de negócio.
 */
import React from "react";

// Taxa de serviço aplicada ao pedido (10%)
const TAXA_SERVICO = 0.1;

const ResumoPedido = ({ itens, onConfirmar }) => {
  // Calcula subtotal somando (preço × quantidade) de cada item
  const subtotal = itens.reduce(
    (acc, { prato, quantidade }) => acc + prato.preco * quantidade,
    0
  );

  const taxaValor = subtotal * TAXA_SERVICO;
  const total = subtotal + taxaValor;

  const formatar = (valor) =>
    `R$ ${valor.toFixed(2).replace(".", ",")}`;

  return (
    <div className="resumo-pedido">
      {/* Linha divisória */}
      <div className="resumo-divider" />

      {/* Linhas de valores */}
      <div className="resumo-linhas">
        <div className="resumo-linha">
          <span>Subtotal</span>
          <span>{formatar(subtotal)}</span>
        </div>
        <div className="resumo-linha resumo-linha--taxa">
          <span>Taxa de serviço (10%)</span>
          <span>{formatar(taxaValor)}</span>
        </div>
        <div className="resumo-linha resumo-linha--total">
          <span>Total</span>
          <span>{formatar(total)}</span>
        </div>
      </div>

      {/* Botão de confirmar pedido */}
      <button className="btn-confirmar" onClick={onConfirmar}>
        Confirmar Pedido
      </button>
    </div>
  );
};

export default ResumoPedido;
