import { useState } from "react"
import ListaTarefas from "./components/ListaTarefas"
import Login from "./components/Login/index";
import { UserContext } from "./contexts/UserContext";
import { TarefaProvider } from "./components/TarefaContext"; // Importação importante!
import './App.css'
import styles from './App.module.css'

function App() {
  const [usuario, setUsuario] = useState({ nome: null, estalogado: false });

  return (
    <UserContext.Provider value={{ usuario, setUsuario }}>
      {}
      <TarefaProvider>
        <main className={styles.main}>
          <h1 className={styles.title}>To-Do List app</h1>
          {usuario.estalogado ? <ListaTarefas /> : <Login />}
        </main>
      </TarefaProvider>
    </UserContext.Provider>
  )
}

export default App