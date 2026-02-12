import { useState } from "react"
import ListaTarefas from "./components/ListaTarefas"
import Login from "./components/Login";
import { UserContext } from "./contexts/UserContext";
import './App.css'

function App() {
  const [usuario, setUsuario] = useState({nome: null, estalogado: false});

  return (
    <UserContext.Provider value={{usuario, setUsuario}}>
    <main>
      <h1>To-Do List app</h1>
      {usuario.estalogado ? <ListaTarefas /> : <Login />}
        
    </main>
    </UserContext.Provider>
  )
}

export default App
