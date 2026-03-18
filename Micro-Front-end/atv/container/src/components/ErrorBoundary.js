import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.error("[ErrorBoundary] Erro no micro frontend:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <span className="error-icon">⚠️</span>
          <p className="error-text">
            {this.props.fallback || "Este micro frontend não está disponível no momento."}
          </p>
          <p className="error-detail">{this.state.errorMessage}</p>
          {/* Permite tentar recarregar o micro */}
          <button
            className="error-retry"
            onClick={() => this.setState({ hasError: false })}
          >
            Tentar novamente
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
