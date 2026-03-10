'use client';
import { useState } from 'react';
import style from './NovaTarefa.module.css'

export default function NovaTarefa({ onAdd }: { onAdd: (nome: string) => void }) {
  const [tarefa, setTarefa] = useState('');

  const handleSubmit = (e: React.ChangeEvent) => {
    e.preventDefault();
    if (tarefa.trim()) {
      onAdd(tarefa);
      setTarefa('');
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        value={tarefa} 
        onChange={(e) => setTarefa(e.target.value)} 
        placeholder="Nova tarefa" 
      />
      <button className={style.button} type="submit">Adicionar</button>
    </form>
  );
}