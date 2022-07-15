function CreateTodoButtom({ setOpenModal }) {

  const onClickButtom = () => {
    setOpenModal(stateModal => !stateModal);
  }

  return (
    <button onClick={onClickButtom}>+</button>
  );
}

export { CreateTodoButtom };