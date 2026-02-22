"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
}: TextRevealProps) {
  const characters = text.split("");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`inline-block ${className}`}
      aria-label={text}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${index}-${char}`}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                delay: delay + index * 0.03,
                ease: [0.21, 0.47, 0.32, 0.98],
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
