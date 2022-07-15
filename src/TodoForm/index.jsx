import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoForm() {

  const [newTodoValue, setNewTodoValue] = useState('')

  const {
    addTodo,
    setOpenModal,
  } = useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }


  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Crea tu nuevo Todo</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe tu nueva To-do"
      />
      <div>
        <button
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
        >
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm }