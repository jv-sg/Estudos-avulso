import { useState } from 'react';
import './Card.css';

function Card({imagem, titulo, descricao, preco}){
    const [quantidade, setQuantidade] = useState(0)

    const addQTD = () => setQuantidade (prev => prev + 1)
    const removeQTD = () => setQuantidade(prev => (prev > 0 ? prev -1 : 0))

    return(
        <section className="card-container">
            <img className="imagem" src={imagem} alt={titulo} />
            <h3 className="titulo">{titulo}</h3>
            <p className="paragrafo">{descricao}</p>
            <span className="preco">R$ {parseFloat(preco).toFixed(2)}</span>
            <div className='qtd'>
                <button onClick={removeQTD}>-</button>
                <span>{quantidade}</span>
                <button onClick={addQTD}>+</button>
            </div>
        </section>
    )
}
export default Card