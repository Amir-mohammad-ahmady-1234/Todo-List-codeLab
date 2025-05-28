import { useAppSelector } from "../types/reduxHooksType";

const TodoFooter = () => {
  const todos = useAppSelector((state) => state.todos);

  // stored state
  const todosLength = todos.length;
  const doneTodos = todos.filter((todo) => todo.completed).length;
  const percent =
    todosLength === 0 ? 0 : Math.round((doneTodos / todosLength) * 100);

  return (
    <footer className="bg-gray-500 sticy font-serif flex flex-col items-center justify-center">
      <span>Number Of Length: {todosLength}</span>
      <span>Percentage of todos completed: {percent}</span>
    </footer>
  );
};

export default TodoFooter;
