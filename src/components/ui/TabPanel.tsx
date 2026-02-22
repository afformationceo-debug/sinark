"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Tab {
  id: string;
  label: string;
  icon?: ReactNode;
}

interface TabPanelProps {
  tabs: Tab[];
  children: (activeTab: string) => ReactNode;
  color?: "indigo" | "cyan" | "emerald" | "amber";
  className?: string;
}

const colorMap = {
  indigo: { active: "border-indigo-500 text-indigo-400", bg: "bg-indigo-500/10" },
  cyan: { active: "border-cyan-500 text-cyan-400", bg: "bg-cyan-500/10" },
  emerald: { active: "border-emerald-500 text-emerald-400", bg: "bg-emerald-500/10" },
  amber: { active: "border-amber-500 text-amber-400", bg: "bg-amber-500/10" },
};

export default function TabPanel({ tabs, children, color = "indigo", className = "" }: TabPanelProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");
  const c = colorMap[color];

  return (
    <div className={className}>
      {/* Tab buttons */}
      <div className="flex gap-1 border-b border-white/6 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === tab.id
                ? c.active
                : "border-transparent text-text-tertiary hover:text-text-secondary"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {children(activeTab)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
