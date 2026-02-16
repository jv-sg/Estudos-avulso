import CardProduto from './cardProduto.jsx';

function App() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <CardProduto nome="Smartphone Galaxy" preco={2500.00} />
      <CardProduto nome="Fone Bluetooth" preco={150.90} />
    </div>
  );
}

export default App