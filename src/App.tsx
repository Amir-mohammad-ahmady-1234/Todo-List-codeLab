import { useEffect } from "react";
import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader";
import TodoMainSection from "./components/TodoMainSection";

function App() {
  useEffect(function () {
    alert(
      "نکته : تودو های انجام شده با رنگ سبز و تودو هایی که انجام نشده با رنگ زرد نمایش داده میشن"
    );
  }, []);
  return (
    <>
      <div className="size-full h-[100vh] flex flex-col items-center justify-center">
        <h1 className="font-bold text-5xl mb-4 font-sans">Todo App</h1>

        <div className="w-[21rem] h-2/3 rounded-2xl border border-b-gray-500 p-2.5 flex flex-col">
          <TodoHeader />

          <div className="flex-1 overflow-auto">
            <TodoMainSection />
          </div>

          <TodoFooter />
        </div>
      </div>
    </>
  );
}

export default App;
