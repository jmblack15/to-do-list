import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoSearch() {

  const { searchValue, setSearchValue } = useContext(TodoContext);

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