import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms/todoAtoms';

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleItemCompletion = () => {
    const newList = todoList.map((todo) => 
      todo.id === item.id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodoList(newList);
  };

  const deleteItem = () => {
    setTodoList(todoList.filter((todo) => todo.id !== item.id));
  };

  return (
    <div style={{ textDecoration: item.isComplete ? 'line-through' : 'none' }}>
      {item.text}
      <button onClick={toggleItemCompletion}>
        {item.isComplete ? 'Desfazer' : 'Concluir'}
      </button>
      <button onClick={deleteItem}>Remover</button>
    </div>
  );
}

export default TodoItem;