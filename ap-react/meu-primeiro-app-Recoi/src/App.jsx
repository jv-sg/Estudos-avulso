import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoList from './components/TodoList.jsx';

function App() {
  return (
    <RecoilRoot>
      <div style={{ padding: '40px' }}>
        <h1>Minha Lista de Tarefas (Recoil)</h1>
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;