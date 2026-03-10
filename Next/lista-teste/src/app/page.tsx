import ListaDeTarefas from '@/components/ListaDeTarefas/index';
import { getTarefas } from '@/lib/api';
import styles from './page.module.css'

export default async function Page() {
  const tarefas = await getTarefas();

  return (
    <main style={{ padding: '2rem' }}>
      <div className={styles.modal}>
        <h1>Minhas Tarefas</h1>
        <ListaDeTarefas tarefasIniciais={tarefas} />
      </div>
    </main>
  );
}