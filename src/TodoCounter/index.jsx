import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

function TodoCounter() {

  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <div>Has Completado {completedTodos} de {totalTodos} ToDos</div>
  )
}

export { TodoCounter }