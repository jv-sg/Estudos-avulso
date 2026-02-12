import { useState } from "react"
import ListaTarefas from "./components/ListaTarefas"
import Login from "./components/Login";
import { UserContext } from "./contexts/UserContext";
import { TarefaProvider } from "./components/TarefaContext"; // Importação importante!
import './App.css'

function App() {
  const [usuario, setUsuario] = useState({ nome: null, estalogado: false });

  return (
    <UserContext.Provider value={{ usuario, setUsuario }}>
      {/* O TarefaProvider deve envolver a ListaTarefas. 
          Colocamos ele aqui para que toda a lógica de tarefas 
          esteja disponível quando o usuário logar. 
      */}
      <TarefaProvider>
        <main>
          <h1>To-Do List app</h1>
          {usuario.estalogado ? <ListaTarefas /> : <Login />}
        </main>
      </TarefaProvider>
    </UserContext.Provider>
  )
}

export default App