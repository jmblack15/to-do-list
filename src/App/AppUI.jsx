import { TodoContext } from '../context/TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButtom } from '../CreateTodoButtom';
import { Modal } from '../modal';
import { useContext } from 'react';
import { TodoForm } from '../TodoForm';


function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Oh noo!!... Hubo un error, intenta recargar la pagina</p>}
        {loading && <p>Cargando To-dos...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer To-do</p>}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            onDelete={() => deleteTodo(todo.text)}
            onComplete={() => completeTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButtom
        setOpenModal={setOpenModal}
      />
    </>
  )
}

export { AppUI }