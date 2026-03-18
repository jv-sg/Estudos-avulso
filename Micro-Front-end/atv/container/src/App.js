import React, { Suspense } from "react";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";

const CardapioApp = React.lazy(() => import("microCardapio/CardapioApp"));
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
