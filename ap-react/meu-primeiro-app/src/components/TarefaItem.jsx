import { memo, useContext } from "react";
import { TarefaContext } from "./TarefaContext";

const TarefaItem = memo(({ tarefa }) => {
  // Pegamos a função alternarConcluida do contexto
  const { removerTarefa, alternarConcluida } = useContext(TarefaContext);

  return (
    <li className="li">
      <input 
        type="checkbox" 
        checked={tarefa.concluida} 
        onChange={() => alternarConcluida(tarefa._id)} 
      />
      
      <span style={{ 
        textDecoration: tarefa.concluida ? 'line-through' : 'none',
        marginLeft: '10px',
        color: tarefa.concluida ? '#888' : '#000'
      }}>
        {tarefa.texto}
      </span>

      <button className="li__btn" onClick={() => removerTarefa(tarefa._id)}>
        Remover
      </button>
    </li>
  );
});

export default TarefaItem;