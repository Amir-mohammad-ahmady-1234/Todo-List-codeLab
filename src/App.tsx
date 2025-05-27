import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader";
import TodoMainSection from "./components/TodoMainSection";

function App() {
  return (
    <>
      <div className="size-full h-[100vh] flex flex-col items-center justify-center">
        <h1 className="font-bold text-5xl mb-4 font-sans">Todo App</h1>
        <div className="w-[21rem] h-2/3 rounded-2xl border-1 border-b-gray-500 p-2.5">
          <TodoHeader />
          <TodoMainSection />
          <TodoFooter />
        </div>
      </div>
    </>
  );
}

export default App;
