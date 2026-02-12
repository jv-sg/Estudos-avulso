import { useState, memo } from "react";
import './Tarefa.css';

function Tarefa({ id, texto, onDelete }){
    const [concluida, setConcluida] = useState(false)
    const alternarConcluida = () => {
        setConcluida(!concluida)
    }
    return(
        <li>
        <input type="checkbox" onChange={alternarConcluida}/>
        <span className={ concluida ? 'concluida' : ''}> {texto}</span>
        <button onClick={() => onDelete(id)}>Remover</button>
        </li>
    )
}
export default memo(Tarefa)