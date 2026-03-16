/**
 * PedidoApp.js - Componente raiz do Micro Pedido
 *
 * Escuta o evento global 'adicionar-item-pedido' disparado pelo
 * micro-cardapio e gerencia o estado do pedido atual.
 *
 * Comunicação entre micros via Custom Events (window):
 *   - Cardápio dispara: window.dispatchEvent(new CustomEvent('adicionar-item-pedido', { detail: { prato } }))
 *   - Pedido ouve:      window.addEventListener('adicionar-item-pedido', handler)
 */
import React, { useState, useEffect, useCallback } from "react";
import ItemPedido from "./components/ItemPedido";
import ResumoPedido from "./components/ResumoPedido";
import PedidoVazio from "./components/PedidoVazio";
import "./styles/pedido.css";

const PedidoApp = () => {
  // Lista de itens no pedido: { prato, quantidade }
  const [itens, setItens] = useState([]);

  // Controla animação de "pulsação" ao adicionar item
  const [pulsar, setPulsar] = useState(false);

  /**
   * Handler do evento global de adição de prato.
   * Incrementa quantidade se o prato já existe, ou adiciona novo item.
   */
  const handleAdicionarItem = useCallback((event) => {
    const { prato } = event.detail;

    setItens((prev) => {
      const existente = prev.find((i) => i.prato.id === prato.id);

      if (existente) {
        // Incrementa quantidade do prato já existente
        return prev.map((i) =>
          i.prato.id === prato.id
            ? { ...i, quantidade: i.quantidade + 1 }
            : i
        );
      }

      // Adiciona novo item com quantidade 1
      return [...prev, { prato, quantidade: 1 }];
    });

    // Dispara animação de pulso
    setPulsar(true);
    setTimeout(() => setPulsar(false), 400);
  }, []);

  // Registra e remove o listener do evento global ao montar/desmontar
  useEffect(() => {
    window.addEventListener("adicionar-item-pedido", handleAdicionarItem);
    return () => {
      window.removeEventListener("adicionar-item-pedido", handleAdicionarItem);
    };
  }, [handleAdicionarItem]);

  /**
   * Remove um item do pedido pelo ID do prato.
   */
  const handleRemoverItem = (pratoId) => {
    setItens((prev) => prev.filter((i) => i.prato.id !== pratoId));
  };

  /**
   * Altera a quantidade de um item. Remove se quantidade chegar a 0.
   */
  const handleAlterarQuantidade = (pratoId, delta) => {
    setItens((prev) =>
      prev
        .map((i) =>
          i.prato.id === pratoId
            ? { ...i, quantidade: i.quantidade + delta }
            : i
        )
        .filter((i) => i.quantidade > 0)
    );
  };

  /**
   * Simula o envio do pedido (limpa o carrinho).
   */
  const handleConfirmarPedido = () => {
    if (itens.length === 0) return;
    alert(`✅ Pedido confirmado! ${itens.length} item(s) enviado(s) à cozinha.`);
    setItens([]);
  };

  // Total de itens (soma das quantidades)
  const totalItens = itens.reduce((acc, i) => acc + i.quantidade, 0);

  return (
    <div className={`pedido-app ${pulsar ? "pedido-app--pulsar" : ""}`}>
      {/* Cabeçalho do pedido com contador */}
      <div className="pedido-header">
        <h2 className="pedido-titulo">Meu Pedido</h2>
        {totalItens > 0 && (
          <span className="pedido-badge">{totalItens}</span>
        )}
      </div>

      {/* Estado vazio */}
      {itens.length === 0 ? (
        <PedidoVazio />
      ) : (
        <>
          {/* Lista de itens */}
          <div className="itens-lista">
            {itens.map((item) => (
              <ItemPedido
                key={item.prato.id}
                item={item}
                onRemover={handleRemoverItem}
                onAlterarQuantidade={handleAlterarQuantidade}
              />
            ))}
          </div>

          {/* Resumo e botão de confirmação */}
          <ResumoPedido
            itens={itens}
            onConfirmar={handleConfirmarPedido}
          />
        </>
      )}
    </div>
  );
};

export default PedidoApp;
