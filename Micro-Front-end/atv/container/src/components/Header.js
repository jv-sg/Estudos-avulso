/**
 * Header.js - Cabeçalho global da aplicação Container
 *
 * Componente de apresentação que exibe a marca do restaurante.
 * Reutilizável e independente dos micros.
 */
import React from "react";

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-inner">
        {/* Logo / marca do restaurante */}
        <div className="header-brand">
          <span className="header-icon">🍽</span>
          <div>
            <h1 className="header-title">Bistrô Moderno</h1>
            <p className="header-subtitle">Cozinha contemporânea & sabores do mundo</p>
          </div>
        </div>

        {/* Badge indicando arquitetura de micro frontends */}
        <div className="header-badge">
          <span className="badge-dot" />
          Micro Frontends
        </div>
      </div>
    </header>
  );
};

export default Header;
