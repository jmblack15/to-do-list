function TodoItem({ text, onDelete, onComplete }) {


  return (
    <li>
      <span onClick={onComplete}>C</span>
      <p>{text}</p>
      <span onClick={onDelete}>X</span>
    </li>
  )
}

export { TodoItem }