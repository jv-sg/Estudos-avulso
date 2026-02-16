import { memo, useContext } from "react";
import { TarefaContext } from "./TarefaContext";
import styled from "styled-components";
import style from './TarefaItem.module.css';

const Lista = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom:1px solid #eee ;
`;

const Botao = styled.button`
background-color: red;
    border: none;
    color: white;
    width: 100px;
    height: 22px;
    border-radius: 4px;
    &:hover{
    background-color: rgb(146, 60, 60);
    }
`;

const TextoItem = styled.span`
    text-decoration: ${({concluida}) => (concluida ? "line-through" : "none")};
    color: ${({concluida}) => (concluida ? "#999" : "#000" )};
`;

const TarefaItem = memo(({ tarefa }) => {
  // Pegamos a função alternarConcluida do contexto
  const { removerTarefa, alternarConcluida } = useContext(TarefaContext);

  return (
    <Lista>
      <input
        type="checkbox" 
        checked={tarefa.concluida} 
        onChange={() => alternarConcluida(tarefa._id)} 
      />
      
      <TextoItem concluida={tarefa.concluida}>{tarefa.texto}</TextoItem>

      <Botao className={style.alerta} onClick={() => removerTarefa(tarefa._id)}>
        Remover
      </Botao>
    </Lista>
  );
});

export default TarefaItem;