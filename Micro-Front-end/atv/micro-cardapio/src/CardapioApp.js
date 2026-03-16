/**
 * CardapioApp.js - Componente raiz do Micro Cardápio
 *
 * Este é o módulo exposto via Module Federation.
 * Gerencia o estado local dos pratos e dispara eventos globais
 * para comunicação com outros micros (ex: micro-pedido).
 */
import React, { useState } from "react";
import PratoCard from "./components/PratoCard";
import FiltroCategoria from "./components/FiltroCategoria";
import { pratos } from "./data/pratos";
import "./styles/cardapio.css";

const CardapioApp = () => {
  // Categoria ativa para filtragem dos pratos
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");

  // Notificação visual temporária após adicionar um prato
  const [notificacao, setNotificacao] = useState(null);

  /**
   * Adiciona um prato ao pedido via evento global.
   * O micro-pedido ouve esse evento com window.addEventListener.
   * Essa é a forma desacoplada de comunicação entre micros independentes.
   */
  const handleAdicionarPrato = (prato) => {
    // Dispara evento customizado com os dados do prato
    window.dispatchEvent(
      new CustomEvent("adicionar-item-pedido", {
        detail: { prato },
        bubbles: true,
      })
    );

    // Exibe notificação de feedback por 2 segundos
    setNotificacao(prato.nome);
    setTimeout(() => setNotificacao(null), 2000);
  };

  // Filtra pratos pela categoria selecionada
  const pratosFiltrados =
    categoriaAtiva === "todos"
      ? pratos
      : pratos.filter((p) => p.categoria === categoriaAtiva);

  // Extrai categorias únicas para o filtro
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
