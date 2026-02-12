import { createContext, useState, useEffect, useMemo } from "react";

export const TarefaContext = createContext();

const API_URL = 'https://crudcrud.com/api/0e2be0bca5d64b11860b8284ac941189/tarefas';

export function TarefaProvider({ children }) {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState("todas"); // "todas", "concluidas", "pendentes"

  // Buscar tarefas (useEffect)
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(dados => setTarefas(dados))
      .catch(err => console.error("Erro ao carregar:", err));
  }, []);

  const adicionarTarefa = async (texto, usuarioNome) => {
    const nova = { texto, usuario: usuarioNome, concluida: false };
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nova)
    });
    const dado = await res.json();
    setTarefas(prev => [...prev, dado]);
  };

  const removerTarefa = (id) => {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then(() => setTarefas(prev => prev.filter(t => t._id !== id)));
  };

  // Memoização do filtro: só reprocessa se 'tarefas' ou 'filtro' mudar
  const tarefasFiltradas = useMemo(() => {
    switch (filtro) {
      case "concluidas": return tarefas.filter(t => t.concluida);
      case "pendentes": return tarefas.filter(t => !t.concluida);
      default: return tarefas;
    }
  }, [tarefas, filtro]);

// Dentro do seu TarefaProvider no TarefaContext.jsx

const alternarConcluida = async (id) => {
  // 1. Localiza a tarefa atual
  const tarefaOriginal = tarefas.find(t => t._id === id);
  if (!tarefaOriginal) return;

  // 2. Cria o objeto atualizado (invertendo o status)
  const tarefaAtualizada = { 
    texto: tarefaOriginal.texto, 
    usuario: tarefaOriginal.usuario, 
    concluida: !tarefaOriginal.concluida 
  };

  try {
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tarefaAtualizada)
    });

    // 3. Atualiza o estado local para refletir na tela imediatamente
    setTarefas(prev => prev.map(t => t._id === id ? { ...t, concluida: !t.concluida } : t));
  } catch (err) {
    console.error("Erro ao atualizar tarefa:", err);
  }
};

// NÃO ESQUEÇA de adicionar 'alternarConcluida' no value do Provider:
return (
  <TarefaContext.Provider value={{ 
    tarefas: tarefasFiltradas, 
    adicionarTarefa, 
    removerTarefa, 
    alternarConcluida, // Adicione aqui
    setFiltro,
    filtro 
  }}>
    {children}
  </TarefaContext.Provider>
);
}