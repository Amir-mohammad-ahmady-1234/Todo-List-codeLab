import { IoMdClose } from "react-icons/io";
import { useAppSelector } from "../types/reduxHooksType";

const TodoMainSection = () => {
  const todos = useAppSelector((state) => state.todos);

  return (
    <ul className="list-disc pl-10 mt-5 text-2xl font-bold space-y-3.5">
      {todos.map((todo) => (
        <li className="w-full pr-5">
          <div className="flex justify-between items-center">
            <span
              className={`${
                todo.completed ? "text-green-800" : "text-yellow-400"
              }`}
            >
              {todo.text}
            </span>
            <button className="bg-red-600 p-2 rounded-2xl">
              <IoMdClose className="text-white text-2xl cursor-pointer" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoMainSection;
