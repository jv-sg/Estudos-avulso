/**
 * LoadingSpinner.js - Indicador de carregamento
 *
 * Exibido via Suspense enquanto os micros remotos são carregados.
 * Aceita uma prop `label` para descrever o que está sendo carregado.
 */
import React from "react";

const LoadingSpinner = ({ label = "Carregando..." }) => {
  return (
    <div className="loading-wrapper">
      <div className="loading-spinner" />
      <p className="loading-label">{label}</p>
    </div>
  );
};

export default LoadingSpinner;
