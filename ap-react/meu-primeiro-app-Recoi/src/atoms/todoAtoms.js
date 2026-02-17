import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [], // Lista de objetos { id, text, isComplete }
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Mostrar Tudo', // 'Mostrar Tudo', 'Concluídas', 'Pendentes'
});