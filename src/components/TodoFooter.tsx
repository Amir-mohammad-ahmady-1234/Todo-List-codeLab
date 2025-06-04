import { useAppSelector } from "../types/reduxHooksType";

const TodoFooter = () => {
  const todos = useAppSelector((state) => state.todos.allTodos);

  // stored state
  const todosLength = todos.length;
  const doneTodos = todos.filter((todo) => todo.completed).length;
  const percent =
    todosLength === 0 ? 0 : Math.round((doneTodos / todosLength) * 100);

  return (
    <footer className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <span className="font-medium">Total Tasks:</span>
          <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-full">
            {todosLength}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-medium">Completed:</span>
          <div className="relative w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="text-indigo-600 dark:text-indigo-400 font-medium">
            {percent}%
          </span>
        </div>
      </div>
    </footer>
  );
};

export default TodoFooter;
