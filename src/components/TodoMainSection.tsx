import { IoMdClose } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../types/reduxHooksType";
import { removeTodo } from "../features/todos/todosSlice";
import { AnimatePresence, motion } from "framer-motion";

const TodoMainSection = () => {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  function handleDeleteTodo(todoId: string) {
    dispatch(removeTodo(todoId));
  }

  return (
    <ul className="space-y-2">
      <AnimatePresence>
        {todos.map((todo) => (
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
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
          </motion.li>
        ))}
        {todos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="empty-state"
          >
            No tasks yet. Add one above!
          </motion.div>
        )}
      </AnimatePresence>
    </ul>
  );
};

export default TodoMainSection;
