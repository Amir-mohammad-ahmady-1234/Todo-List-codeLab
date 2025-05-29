import { useEffect } from "react";
import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader";
import TodoMainSection from "./components/TodoMainSection";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 px-4 transition-colors duration-300">
      <ThemeToggle />
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-indigo-600 dark:text-indigo-400 animate-fade-in">
          Todo App
        </h1>

        <div className="card bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-fade-in">
          <TodoHeader />

          <div className="flex-1 overflow-auto max-h-[60vh] custom-scrollbar">
            <TodoMainSection />
          </div>

          <TodoFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
