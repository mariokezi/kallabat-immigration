"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export function AnimatedWords({
  words,
  className,
  centered = false,
}: {
  words: string[];
  className?: string;
  centered?: boolean;
}) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => words, [words]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2400);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <span
      className={`relative flex w-full overflow-hidden pb-2 pt-1 ${
        centered ? "justify-center" : "justify-start"
      }`}
      style={{ minHeight: "1.3em" }}
    >
      &nbsp;
      {titles.map((title, index) => (
        <motion.span
          key={index}
          className={`absolute font-bold ${className ?? ""}`}
          initial={{ opacity: 0, y: "-100" }}
          transition={{ type: "spring", stiffness: 50 }}
          animate={
            titleNumber === index
              ? { y: 0, opacity: 1 }
              : { y: titleNumber > index ? -150 : 150, opacity: 0 }
          }
        >
          {title}
        </motion.span>
      ))}
    </span>
  );
}
