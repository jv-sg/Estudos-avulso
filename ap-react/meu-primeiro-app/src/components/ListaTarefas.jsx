import { useContext } from "react";
import { TarefaContext } from "./TarefaContext";
import { UserContext } from "../contexts/UserContext";
import { useInput } from "../hooks/useInput";
import TarefaItem from "./TarefaItem";

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
      <form onSubmit={handleSubmit}>
        <input {...inputTarefa} placeholder="Nova tarefa..." />
        <button type="submit">Adicionar</button>
      </form>

      <div className="filtros">
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("pendentes")}>Pendentes</button>
        <button onClick={() => setFiltro("concluidas")}>Concluídas</button>
      </div>

      <ul>
        {tarefas.map(t => (
          <TarefaItem key={t._id} tarefa={t} />
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefas;