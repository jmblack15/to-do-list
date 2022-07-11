import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButtom } from '../CreateTodoButtom';

function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {error && <p>Oh noo!!... Hubo un error, intenta recargar la pagina</p>}
        {loading && <p>Cargando To-dos...</p>}
        {(!loading  && !searchedTodos.length) && <p>Crea tu primer To-do</p>}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            onDelete={() => deleteTodo(todo.text)}
            onComplete={() => completeTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButtom />
    </>
  )
}

export { AppUI }