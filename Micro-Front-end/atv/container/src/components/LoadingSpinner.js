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
