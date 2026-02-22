"use client";

import { motion } from "framer-motion";
import { Building2, Megaphone, ShoppingCart, TrendingUp } from "lucide-react";

const phases = [
  { id: "p1", label: "시장진입", Icon: Building2, color: "#6366f1" },
  { id: "p2", label: "마케팅", Icon: Megaphone, color: "#06b6d4" },
  { id: "p3", label: "세일즈", Icon: ShoppingCart, color: "#10b981" },
  { id: "p4", label: "운영", Icon: TrendingUp, color: "#f59e0b" },
];

export default function HeroPipelineGraph() {
  return (
    <div className="relative w-full max-w-[400px] mx-auto">
      <svg viewBox="0 0 320 320" fill="none" className="w-full h-auto">
        {/* Edges from hub to each phase node */}
        {phases.map((phase, i) => {
          const angle = -90 + i * 90;
          const rad = (angle * Math.PI) / 180;
          const cx = 160 + Math.cos(rad) * 100;
          const cy = 160 + Math.sin(rad) * 100;
          return (
            <motion.line
              key={phase.id}
              x1="160"
              y1="160"
              x2={cx}
              y2={cy}
              stroke={phase.color}
              strokeWidth="1.5"
              strokeOpacity="0.3"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.6, ease: "easeOut" }}
            />
          );
        })}

        {/* Central hub */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <circle cx="160" cy="160" r="32" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.25)" strokeWidth="1" />
          <text x="160" y="156" textAnchor="middle" fill="#a5b4fc" fontSize="10" fontWeight="600" fontFamily="system-ui">
            K-Brand
          </text>
          <text x="160" y="170" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="system-ui">
            Hub
          </text>
        </motion.g>

        {/* Phase nodes */}
        {phases.map((phase, i) => {
          const angle = -90 + i * 90;
          const rad = (angle * Math.PI) / 180;
          const cx = 160 + Math.cos(rad) * 100;
          const cy = 160 + Math.sin(rad) * 100;
          return (
            <motion.g
              key={phase.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.15, duration: 0.4 }}
            >
              <rect
                x={cx - 28}
                y={cy - 20}
                width="56"
                height="40"
                rx="8"
                fill="rgba(255,255,255,0.03)"
                stroke={phase.color}
                strokeWidth="1"
                strokeOpacity="0.3"
              />
              <foreignObject x={cx - 28} y={cy - 20} width="56" height="40">
                <div className="flex flex-col items-center justify-center h-full">
                  <phase.Icon size={14} strokeWidth={1.5} style={{ color: phase.color }} />
                  <span className="text-[7px] mt-0.5 text-text-secondary font-medium">{phase.label}</span>
                </div>
              </foreignObject>
            </motion.g>
          );
        })}

        {/* Subtle outer ring */}
        <motion.circle
          cx="160"
          cy="160"
          r="140"
          fill="none"
          stroke="rgba(99,102,241,0.05)"
          strokeWidth="1"
          strokeDasharray="2 6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        />
      </svg>
    </div>
  );
}
