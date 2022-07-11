function CreateTodoButtom() {

  const onClickButtom = () => {
    alert('Se deberia abrir el modal')
  }

  return (
    <button onClick={onClickButtom}>+</button>
  );
}

export { CreateTodoButtom };