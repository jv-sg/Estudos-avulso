import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoAtoms';

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    if (!inputValue) return;
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      { id: Date.now(), text: inputValue, isComplete: false },
    ]);
    setInputValue('');
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addItem}>Adicionar Tarefa</button>
    </div>
  );
}

export default TodoItemCreator;