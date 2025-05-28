import { useState } from "react";
import { addTodo } from "../features/todos/todosSlice";
import { useAppDispatch } from "../types/reduxHooksType";

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

  return (
    <header>
      <form
        className="flex justify-between items-center border-1 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <input
          className="pl-3 outline-0 border-0 font-mono"
          type="text"
          placeholder="Add new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="text-2xl font-bold border rounded-2xl p-1 bg-gray-200 cursor-pointer hover:bg-gray-300 transition-all duration-300">
          Add
        </button>
      </form>
    </header>
  );
};

export default TodoHeader;
