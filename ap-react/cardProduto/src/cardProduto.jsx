import React, { useState } from 'react';
import styled from "styled-components";

const ContainerCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  background-color: #fff;
`;

const NomeProduto = styled.h3`
  margin: 0 0 10px 0;
  color: #333;
`;

const PrecoProduto = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #444;
  margin-bottom: 15px;
`;

const BotaoAdicionar = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-weight: 500;
  transition: background-color 0.3s ease;

  /* Lógica dinâmica baseada na prop */
  background-color: ${props => (props.adicionado ? '#198754' : '#6c757d')};

  &:hover {
    opacity: 0.9;
  }
`;

// 1. Definição do Componente de Interface
const CardProduto = ({ nome, preco }) => {
  const [foiAdicionado, setFoiAdicionado] = useState(false);

  const handleToggleCarrinho = () => {
    setFoiAdicionado(!foiAdicionado);
  };

  return (
    <ContainerCard>
      <NomeProduto>{nome}</NomeProduto>
      <PrecoProduto>R$ {preco.toFixed(2)}</PrecoProduto>
      
      {/* 3. Estilização Dinâmica via Prop 'adicionado' */}
      <BotaoAdicionar 
        adicionado={foiAdicionado} 
        onClick={handleToggleCarrinho}
      >
        {foiAdicionado ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
      </BotaoAdicionar>
    </ContainerCard>
  );
};

// --- 2 e 4. Refatoração com Styled Components e Organização ---

export default CardProduto;