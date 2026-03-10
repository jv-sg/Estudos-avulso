'use client';
import { useState } from 'react';
import { useContadorDeTarefas } from '@/app/hooks/useContadorDeTarefas';
import NovaTarefa from '../NovaTarefa/index';
import { Tarefa } from '@/lib/api';
import style from './ListaDeTarefas.module.css'

export default function ListaDeTarefas({ tarefasIniciais }: { tarefasIniciais: Tarefa[] }) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);
  const { total, incrementar } = useContadorDeTarefas(tarefasIniciais.length);

  const adicionarTarefa = (titulo: string) => {
    const nova = { id: Date.now(), titulo };
    setTarefas([...tarefas, nova]);
    incrementar();
  };

  return (
    <section>
      <h2 className={style.h2}>Total de tarefas: <span data-testid="contador">{total}</span></h2>
      
      <NovaTarefa onAdd={adicionarTarefa} />

      <ul className={style.ul}>
        {tarefas.map((t) => (
          <li className={style.li} key={t.id}>{t.titulo}</li>
        ))}
      </ul>
    </section>
  );
}