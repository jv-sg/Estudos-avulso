import { useEffect, useState } from 'react'
import './App.css'
import FormularioReclamacao from './components/FormularioReclamacao'
import type { Reclamacao } from './tipos/Reclamacao'
import ListaReclamacoes from './components/ListaReclamacoes'
import axios from 'axios'

const API_URL = "https://crudcrud.com/api/aace530eae88403aaed6b645d4be288e/reclamacoes"

function App() {

  const [reclamacoes, setReclamacoes] = useState<Reclamacao[]>([])

  const adicionarReclamacao = (dados: Reclamacao) => {

    axios
    .post<Reclamacao>(API_URL, dados)
    .then(resposta => setReclamacoes(prev => [...prev, resposta.data]))
  }

  useEffect(() =>{
    //Fetch
    axios.get<Reclamacao[]>(API_URL)
    .then(resposta => setReclamacoes(resposta.data))
  },[])

  return (
    <>
      <FormularioReclamacao aoEnviar = {adicionarReclamacao}/>
      <ListaReclamacoes reclamacoes={reclamacoes} />
    </>
  )
}

export default App
