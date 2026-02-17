import { useRecoilValue, useRecoilState } from 'recoil';
import { todoListFilterState } from '../atoms/todoAtoms';
import { filteredTodoListState } from '../selectors/todoSelectors';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  return (
    <>
      <TodoItemCreator />
      
      <div>
        Filtro:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="Mostrar Tudo">Todos</option>
          <option value="Concluídas">Concluídas</option>
          <option value="Pendentes">Pendentes</option>
        </select>
      </div>

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;