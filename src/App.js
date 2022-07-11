import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButtom } from './CreateTodoButtom';
import './App.css';

const todos = [
  { text: 'aprender React', completed: false },
  { text: 'aprender Angular', completed: false },
  { text: 'aprender Backend', completed: false },
  { text: 'llorar por no conseguir trabajo', completed: false },
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButtom />
    </>
  );
}

export default App;
