import { useContext } from "react";
import { TarefaContext } from "./TarefaContext";
import { UserContext } from "../contexts/UserContext";
import { useInput } from "../hooks/useInput";
import TarefaItem from "./TarefaItem";
import styles from './ListaTarefa.module.css'


function ListaTarefas() {
  const { tarefas, adicionarTarefa, setFiltro } = useContext(TarefaContext);
  const { usuario } = useContext(UserContext);
  const inputTarefa = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputTarefa.valor.trim()) return;
    adicionarTarefa(inputTarefa.valor, usuario.nome);
    inputTarefa.limpar(); // Agora com parênteses!
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} {...inputTarefa} placeholder="Nova tarefa..." />
        <button className={styles.button} type="submit">Adicionar</button>
      </form>

      <div className="filtros">
        <button className={styles.buttonSec} onClick={() => setFiltro("todas")}>Todas</button>
        <button className={styles.buttonSec} onClick={() => setFiltro("pendentes")}>Pendentes</button>
        <button className={styles.buttonSec} onClick={() => setFiltro("concluidas")}>Concluídas</button>
      </div>

      <ul className={styles.lista}>
        {tarefas.map(t => (
          <TarefaItem key={t._id} tarefa={t} />
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefas;