import React from 'react';
import BookList from './components/BookList';

const headerStyle: React.CSSProperties = {
  backgroundColor: '#282c34',
  padding: '20px',
  color: 'white',
  textAlign: 'center',
  marginBottom: '30px'
};

const mainStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  flexDirection: 'column'
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  marginTop: '50px',
  padding: '20px',
  fontSize: '0.8rem',
  color: '#666'
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header style={headerStyle}>
        <h1>📚 My Digital Library</h1>
      </header>
      
      <main style={mainStyle}>
        {/* O BookList gerencia o Form e os Itens internamente */}
        <BookList />
      </main>

      <footer style={footerStyle}>
        <p>Desenvolvido com React, TypeScript & Axios</p>
      </footer>
    </div>
  );
};

export default App
