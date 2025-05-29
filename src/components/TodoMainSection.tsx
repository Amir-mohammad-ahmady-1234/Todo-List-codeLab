import { IoMdClose } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../types/reduxHooksType";
import { removeTodo } from "../features/todos/todosSlice";

const TodoMainSection = () => {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  function handleDeleteTodo(todoId: string) {
    dispatch(removeTodo(todoId));
  }

  return (
    <ul className="divide-y divide-gray-100 dark:divide-gray-700">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`todo-item animate-fade-in ${
            todo.completed ? "completed" : ""
          }`}
        >
          <input
            type="checkbox"
            className="checkbox"
            checked={todo.completed}
          />
          <span
            className={`todo-text flex-1 transition-all duration-300 ${
              todo.completed
                ? "text-green-600 dark:text-green-400 line-through opacity-70"
                : "text-yellow-500 dark:text-yellow-400"
            }`}
          >
            {todo.text}
          </span>
          <button
            className="btn btn-danger p-2"
            onClick={() => handleDeleteTodo(todo.id)}
            aria-label="Delete todo"
          >
            <IoMdClose className="text-white text-xl" />
          </button>
        </li>
      ))}
      {todos.length === 0 && (
        <li className="text-center py-8 text-gray-500 dark:text-gray-400 animate-fade-in">
          No tasks yet. Add one above!
        </li>
      )}
    </ul>
  );
};

export default TodoMainSection;
