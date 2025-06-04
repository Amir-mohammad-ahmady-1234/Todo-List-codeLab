import { useState } from "react";
import { addTodo, searchTodos } from "../features/todos/todosSlice";
import { useAppDispatch } from "../types/reduxHooksType";
import { FiSearch } from "react-icons/fi";

const TodoHeader = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  }

  function handleSearchTodos(e) {
    // e.preventDefault()
    dispatch(searchTodos(inputValue));
  }

  return (
    <header className="p-4 border-b border-gray-100 dark:border-gray-700 flex item-center justify-center">
        <button
          className="cursor-pointer flex-1/10 flex items-center justify-center"
          onClick={(e) => handleSearchTodos(e)}
        >
          <FiSearch />
        </button>
      <form className="flex gap-3 items-center flex-2000" onSubmit={handleSubmit}>
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
