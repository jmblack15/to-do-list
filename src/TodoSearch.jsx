function TodoSearch({searchValue, setSearchValue}) {

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value)
  }

  return (
    <input
      placeholder="Busca tu To-do"
      onChange={onSearchValueChange}
      value={searchValue}
    />
  );
}

export { TodoSearch }