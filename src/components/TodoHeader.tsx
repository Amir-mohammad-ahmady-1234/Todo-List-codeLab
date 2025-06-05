import { useState, useEffect } from "react";
import { addTodo, searchTodos } from "../features/todos/todosSlice";
import { useAppDispatch } from "../types/reduxHooksType";
import { FiSearch } from "react-icons/fi";
import { ImSpinner2 } from "react-icons/im"; // spinner icon

const TodoHeader = () => {
  const [inputValue, setInputValue] = useState("");
  const [seachInputValue, setSeachInputValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  }

  function handleSearchTodosSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    triggerSearch(seachInputValue);
    setSeachInputValue("");
  }

  function triggerSearch(query: string) {
    setIsSearching(true);
    dispatch(searchTodos(query));
    setTimeout(() => setIsSearching(false), 500); // شبیه‌سازی لودینگ
  }

  useEffect(() => {
    triggerSearch(seachInputValue);
  }, [seachInputValue]);

  return (
    <header className="p-4 border-b border-gray-100 dark:border-gray-700 flex flex-col item-center justify-center gap-5">
      <form
        onSubmit={handleSearchTodosSubmit}
        className="relative w-full max-w-md"
      >
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300">
          {isSearching ? (
            <ImSpinner2 className="animate-spin" size={18} />
          ) : (
            <FiSearch size={18} />
          )}
        </span>

        <input
          type="search"
          placeholder="Search for todos..."
          value={seachInputValue}
          onChange={(e) => setSeachInputValue(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-full text-center sm:text-left border-2 border-gray-300 dark:border-gray-500 outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
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
