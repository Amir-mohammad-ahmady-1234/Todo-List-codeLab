import { motion } from "framer-motion";

type TabType = "all" | "active" | "completed";

interface TodoTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  totalCount?: number; // ← به صورت اختیاری شمارنده
}

const TodoTabs = ({ activeTab, onTabChange, totalCount }: TodoTabsProps) => {
  const tabs: { id: TabType; label: string }[] = [
    { id: "all", label: "All" },
    { id: "active", label: "Active" },
    { id: "completed", label: "Completed" },
  ];

  return (
    <div className="flex justify-center mb-6">
      <div className="relative bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 p-2 rounded-2xl shadow-md backdrop-blur-md border border-gray-200/40 dark:border-gray-700/40 max-w-full overflow-x-auto">
        <div className="flex gap-2 sm:gap-3 px-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <motion.button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`relative px-5 sm:px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "text-white"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {tab.label}
                  {tab.id === "all" && totalCount !== undefined && (
                    <span className="text-xs bg-white/30 px-2 py-0.5 rounded-full text-white">
                      {totalCount}
                    </span>
                  )}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoTabs;
