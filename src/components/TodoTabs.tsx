import { motion } from "framer-motion";

type TabType = "all" | "active" | "completed";

interface TodoTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TodoTabs = ({ activeTab, onTabChange }: TodoTabsProps) => {
  const tabs: { id: TabType; label: string }[] = [
    { id: "all", label: "All" },
    { id: "active", label: "Active" },
    { id: "completed", label: "Completed" },
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="relative bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 p-1.5 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
        <div className="flex flex-wrap gap-1.5">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-md"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center gap-1.5">
                {tab.label}
                {tab.id === "all" && (
                  <span className="text-xs px-1.5 py-0.5 rounded-full bg-white/20 text-white">
                    {tabs.length}
                  </span>
                )}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoTabs;
