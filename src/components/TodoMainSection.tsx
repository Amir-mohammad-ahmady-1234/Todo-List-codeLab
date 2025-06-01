import { IoMdClose } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "../types/reduxHooksType";
import { removeTodo, updateTodo } from "../features/todos/todosSlice";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const TodoMainSection = () => {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  function handleDeleteTodo(todoId: string) {
    dispatch(removeTodo(todoId));
  }

  function handleEditClick(todoId: string, currentText: string) {
    setEditingId(todoId);
    setEditText(currentText);
  }

  function handleEditSave(todo: { id: string; completed: boolean }) {
    if (editText.trim() !== "") {
      dispatch(
        updateTodo({ id: todo.id, text: editText, completed: todo.completed })
      );
      setEditingId(null);
      setEditText("");
    }
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
              onChange={(e) =>
                dispatch(
                  updateTodo({
                    id: todo.id,
                    text: todo.text,
                    completed: e.target.checked,
                  })
                )
              }
            />
            {editingId === todo.id ? (
              <input
                className="input flex-1 mr-2"
                value={editText}
                autoFocus
                onChange={(e) => setEditText(e.target.value)}
                onBlur={() => handleEditSave(todo)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleEditSave(todo);
                  if (e.key === "Escape") setEditingId(null);
                }}
              />
            ) : (
              <span
                className={`todo-text flex-1 transition-all duration-300 ${
                  todo.completed
                    ? "text-green-600 dark:text-green-400 line-through opacity-70"
                    : "text-yellow-500 dark:text-yellow-400"
                }`}
                onDoubleClick={() => handleEditClick(todo.id, todo.text)}
              >
                {todo.text}
              </span>
            )}
            <button
              className="btn btn-edit p-2 mr-2"
              onClick={() => handleEditClick(todo.id, todo.text)}
              aria-label="Edit todo"
            >
              <FiEdit2 className=" text-xl" />
            </button>
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
