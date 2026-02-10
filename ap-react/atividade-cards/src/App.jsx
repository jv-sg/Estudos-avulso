import { useState, useEffect } from 'react';
import Card from "./components/Card"
import './App.css'

function App() {
  const [cards, setCards] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const [formData, setFormData] = useState({
    titulo: '', descricao: '', valor: '', urlImagem: ''
  });

  useEffect(() => {
    setTimeout(() => {
      setCards([
        { id: 1, titulo: "Café Especial", descricao: "Grãos arábica", valor: 35.90, urlImagem: "https://placehold.co/600x400" }
      ]);
      setCarregando(false);
    }, 2000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoProduto = { ...formData, id: Date.now() };
    setCards([...cards, novoProduto]);
    
    // Limpar formulário
    setFormData({ titulo: '', descricao: '', valor: '', urlImagem: '' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main>
      <h1>Vitrine de Produtos</h1>

      {/* 4. Formulário Controlado */}
      <form onSubmit={handleSubmit}>
        <input name="titulo" value={formData.titulo} onChange={handleInputChange} placeholder="Nome" required />
        <input name="descricao" value={formData.descricao} onChange={handleInputChange} placeholder="Descrição" required />
        <input name="valor" type="number" value={formData.valor} onChange={handleInputChange} placeholder="Preço" required />
        <input name="urlImagem" value={formData.urlImagem} onChange={handleInputChange} placeholder="URL da Imagem" required />
        <button type="submit">Cadastrar Produto</button>
      </form>

      <article>
        {carregando ? (
          <p>Carregando produtos...</p>
        ) : (
          <div className="lista-cards">
            {/* 3. Listagem Dinâmica */}
            {cards.map(produto => (
              <Card 
                key={produto.id}
                titulo={produto.titulo}
                descricao={produto.descricao}
                preco={produto.valor}
                imagem={produto.urlImagem}
              />
            ))}
          </div>
        )}
      </article>
    </main>
  );
}

export default App
