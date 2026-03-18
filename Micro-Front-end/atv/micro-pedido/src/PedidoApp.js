import React, { useState, useEffect, useCallback } from "react";
import ItemPedido from "./components/ItemPedido";
import ResumoPedido from "./components/ResumoPedido";
import PedidoVazio from "./components/PedidoVazio";
import "./styles/pedido.css";

const PedidoApp = () => {
  const [itens, setItens] = useState([]);
  const [pulsar, setPulsar] = useState(false);
  const handleAdicionarItem = useCallback((event) => {
    const { prato } = event.detail;

    setItens((prev) => {
      const existente = prev.find((i) => i.prato.id === prato.id);

      if (existente) {
        return prev.map((i) =>
          i.prato.id === prato.id
            ? { ...i, quantidade: i.quantidade + 1 }
            : i
        );
      }
      return [...prev, { prato, quantidade: 1 }];
    });

    setPulsar(true);
    setTimeout(() => setPulsar(false), 400);
  }, []);

  useEffect(() => {
    window.addEventListener("adicionar-item-pedido", handleAdicionarItem);
    return () => {
      window.removeEventListener("adicionar-item-pedido", handleAdicionarItem);
    };
  }, [handleAdicionarItem]);

  const handleRemoverItem = (pratoId) => {
    setItens((prev) => prev.filter((i) => i.prato.id !== pratoId));
  };


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

  const handleConfirmarPedido = () => {
    if (itens.length === 0) return;
    alert(`✅ Pedido confirmado! ${itens.length} item(s) enviado(s) à cozinha.`);
    setItens([]);
  };

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
