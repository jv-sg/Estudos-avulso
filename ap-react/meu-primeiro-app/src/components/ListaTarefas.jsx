import { useContext, useEffect, useState } from "react";
import Tarefa from "./Tarefa";
import { useInput } from "../hooks/useInput";
import { UserContext } from "../contexts/UserContext";
import './ListaTarefa.css'

const API_URL = 'https://crudcrud.com/api/0e2be0bca5d64b11860b8284ac941189/tarefas';

function ListaTarefas() {
  const [tarefas, setTarefas] = useState ([]);
  const tarefa = useInput();
  const {usuario} = useContext(UserContext);
  
  //Buscar os dados na API quando o componente for montado
  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(dados => setTarefas(dados))
    .catch(error => console.error("Erro ao buscar a tarefa: ", error))
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Valor da tarefa: " + tarefa.valor)
    if(tarefa.valor === '') return;

    //Envio da tarefa para a API
    const nova = { usuario: usuario.nome, texto: tarefa.valor}
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(nova)
    })
    .then(res => res.json())
    .then(tarefaCriada => {
      setTarefas([...tarefas, tarefaCriada]);
      tarefa.limpar;
    })
    .catch(error => console.error("Erro ao buscar a tarefa: ", error))
  }

  const handleDeletar = (id) => {
  fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    .then(res => {
      if (res.ok) {
        // Filtra a lista removendo a tarefa que tem o ID deletado
        setTarefas(prev => prev.filter(t => t._id !== id));
      }
    })
    .catch(error => console.error("Erro ao deletar:", error));
};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="O que você fará hoje?"
        value={tarefa.valor}
        onChange={tarefa.onChange}/>
        <button type="submit">Adicionar tarefa</button>
      </form>

      <ul>
      {tarefas
        .filter(tarefa => tarefa.usuario === usuario.nome)
        .map(tarefa => (
            <Tarefa key={tarefa._id}
            id={tarefa._id}
            texto={tarefa.texto}
            onDelete={handleDeletar}
            />
          ))
        }
      </ul>
    </>
  )
}

export default ListaTarefas
