const TodoHeader = () => {
  return (
    <footer>
      <div className="flex justify-between border-1 rounded-2xl">
        <input
          className="pl-3 outline-0 border-0 font-mono"
          type="text"
          placeholder="Add new task"
        />
        <button className="text-2xl font-bold border rounded-2xl p-1 bg-gray-200 cursor-pointer hover:bg-gray-300 transition-all duration-300">
          Add
        </button>
      </div>
    </footer>
  );
};

export default TodoHeader;
