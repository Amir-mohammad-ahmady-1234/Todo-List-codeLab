import { useState } from "react";
import { addTodo, searchTodos } from "../features/todos/todosSlice";
import { useAppDispatch } from "../types/reduxHooksType";
import { FiSearch } from "react-icons/fi";

const TodoHeader = () => {
  const [inputValue, setInputValue] = useState("");
  const [seachInputValue, setSeachInputValue] = useState("");
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  }

  function handleSearchTodosSubmit(e) {
    e.preventDefault();
    dispatch(searchTodos(seachInputValue));
    setSeachInputValue("");
  }

  return (
    <header className="p-4 border-b border-gray-100 dark:border-gray-700 flex flex-col item-center justify-center gap-5">
      <form
        onSubmit={handleSearchTodosSubmit}
        className="flex items-center justify-center gap-10"
      >
        <button className="cursor-pointer flex items-center justify-center">
          <FiSearch />
        </button>
        <input
          type="search"
          placeholder="seacrh for todos ..."
          value={seachInputValue}
          onChange={(e) => setSeachInputValue(e.target.value)}
          className="text-center border-2 border-gray-700 rounded-3xl  outline-0 dark:border-2 dark:border-gray-200"
        />
      </form>
      <form className="flex gap-3 items-center" onSubmit={handleSubmit}>
        <input
          className="input flex-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          type="text"
          placeholder="Add new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Add Task
        </button>
      </form>
    </header>
  );
};

export default TodoHeader;
