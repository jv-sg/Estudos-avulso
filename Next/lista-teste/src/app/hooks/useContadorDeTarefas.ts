import { useState } from 'react';

export function useContadorDeTarefas(tarefasIniciais: number = 0) {
  const [total, setTotal] = useState(tarefasIniciais);
  const incrementar = () => setTotal((prev) => prev + 1);
  
  return { total, incrementar };
}