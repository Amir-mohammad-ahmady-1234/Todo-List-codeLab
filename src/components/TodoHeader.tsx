import { useState, useEffect, useMemo } from "react";
import { addTodo, searchTodos } from "../features/todos/todosSlice";
import { useAppDispatch } from "../types/reduxHooksType";
import { FiSearch } from "react-icons/fi";
<<<<<<< HEAD
import { ImSpinner2 } from "react-icons/im";
import debounce from "lodash/debounce";
=======
import { ImSpinner2 } from "react-icons/im"; // spinner icon
import debounce from "lodash/debounce"; 
>>>>>>> 5dc7851ad2dd625472df8894fc0cd23795618677

const TodoHeader = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const dispatch = useAppDispatch();

<<<<<<< HEAD
=======
  
>>>>>>> 5dc7851ad2dd625472df8894fc0cd23795618677
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  }

<<<<<<< HEAD
=======
  
>>>>>>> 5dc7851ad2dd625472df8894fc0cd23795618677
  const debouncedSearch = useMemo(
    () =>
      debounce((query: string) => {
        setIsSearching(true);
        dispatch(searchTodos(query));
<<<<<<< HEAD
        setTimeout(() => setIsSearching(false), 500);
      }, 500),
    [dispatch]
  );

=======
        setTimeout(() => setIsSearching(false), 500); 
      }, 500), 
    [dispatch]
  );

  
>>>>>>> 5dc7851ad2dd625472df8894fc0cd23795618677
  useEffect(() => {
    if (searchInputValue.trim()) {
      debouncedSearch(searchInputValue);
    } else {
<<<<<<< HEAD
      dispatch(searchTodos(""));
    }
=======
     
      dispatch(searchTodos(""));  
    }
    
>>>>>>> 5dc7851ad2dd625472df8894fc0cd23795618677
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchInputValue, debouncedSearch, dispatch]);

<<<<<<< HEAD
=======
  
>>>>>>> 5dc7851ad2dd625472df8894fc0cd23795618677
  function handleSearchTodosSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (searchInputValue.trim()) {
      dispatch(searchTodos(searchInputValue));
      setIsSearching(true);
      setTimeout(() => setIsSearching(false), 500);
      setSearchInputValue("");
<<<<<<< HEAD
      debouncedSearch.cancel(); 
=======
      debouncedSearch.cancel();
>>>>>>> 5dc7851ad2dd625472df8894fc0cd23795618677
    }
  }

  return (
    <header className="p-4 border-b border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center gap-5">
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
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-full text-center sm:text-left border-2 border-gray-300 dark:border-gray-500 outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </form>

      <form className="flex items-center w-full gap-5" onSubmit={handleSubmit}>
        <input
          className="input flex-grow max-w-[86%] bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
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
