export interface Tarefa {
  id: number;
  titulo: string;
}

export const getTarefas = async (): Promise<Tarefa[]> => {
  // Simula um delay de rede
  return Promise.resolve([
    { id: 1, titulo: "Estudar Server Components" },
    { id: 2, titulo: "Configurar Jest no Next.js 15" },
  ]);
};