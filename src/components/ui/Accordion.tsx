"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  icon?: ReactNode;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  color?: "indigo" | "cyan" | "emerald" | "amber";
  allowMultiple?: boolean;
  className?: string;
}

const borderColors = {
  indigo: "border-indigo-500/15",
  cyan: "border-cyan-500/15",
  emerald: "border-emerald-500/15",
  amber: "border-amber-500/15",
};

const iconColors = {
  indigo: "text-indigo-400",
  cyan: "text-cyan-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
};

export default function Accordion({
  items,
  color = "indigo",
  allowMultiple = false,
  className = "",
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={`border ${borderColors[color]} rounded-xl bg-white/[0.02] overflow-hidden`}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center gap-3 px-5 py-4 text-left cursor-pointer"
            >
              {item.icon && <span className={iconColors[color]}>{item.icon}</span>}
              <span className="flex-1 text-sm font-medium text-text-primary">{item.title}</span>
              <ChevronDown
                size={16}
                className={`text-text-tertiary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
