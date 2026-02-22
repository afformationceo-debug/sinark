"use client";

import { useRef, useState, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
  showDots?: boolean;
  itemCount?: number;
}

export default function HorizontalScroll({
  children,
  className = "",
  showDots = true,
  itemCount = 0,
}: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.children[0]?.clientWidth || 300;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current || itemCount === 0) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.children[0]?.clientWidth || 300;
    const gap = 24;
    const idx = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(idx, itemCount - 1));
  };

  return (
    <div className={className}>
      <div className="relative group">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          <ChevronLeft size={16} className="text-text-secondary" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          <ChevronRight size={16} className="text-text-secondary" />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {children}
        </div>
      </div>

      {/* Pagination dots */}
      {showDots && itemCount > 0 && (
        <div className="flex justify-center gap-1.5 mt-4">
          {Array.from({ length: itemCount }).map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === activeIndex ? "bg-white/40" : "bg-white/10"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
