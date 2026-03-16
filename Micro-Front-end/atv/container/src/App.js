/**
 * App.js - Componente raiz do Container
 *
 * Orquestra o layout e carrega os micro frontends remotos.
 * Usa React.lazy + Suspense para carregamento assíncrono dos micros.
 */
import React, { Suspense } from "react";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";

// Importa o micro Cardápio de forma lazy via Module Federation
// O nome 'microCardapio' corresponde ao alias declarado no webpack.config.js
const CardapioApp = React.lazy(() => import("microCardapio/CardapioApp"));

// Importa o micro Pedido de forma lazy via Module Federation
const PedidoApp = React.lazy(() => import("microPedido/PedidoApp"));

const App = () => {
  return (
    <div className="app-container">
      {/* Cabeçalho global do restaurante */}
      <Header />

      <main className="main-content">
        <div className="micro-grid">
          {/* Seção do Cardápio */}
          <section className="micro-section micro-section--cardapio">
            <ErrorBoundary fallback="Erro ao carregar o cardápio.">
              <Suspense fallback={<LoadingSpinner label="Carregando cardápio..." />}>
                <CardapioApp />
              </Suspense>
            </ErrorBoundary>
          </section>

          {/* Seção do Pedido */}
          <section className="micro-section micro-section--pedido">
            <ErrorBoundary fallback="Erro ao carregar o pedido.">
              <Suspense fallback={<LoadingSpinner label="Carregando pedido..." />}>
                <PedidoApp />
              </Suspense>
            </ErrorBoundary>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
