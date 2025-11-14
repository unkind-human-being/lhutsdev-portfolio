"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingShapes() {
  const [shapes, setShapes] = useState<
    { size: number; left: number; top: number; color: string; shape: string; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const colors = [
      "#A5B4FC", "#FCA5A5", "#6EE7B7", "#93C5FD",
      "#F9A8D4", "#FCD34D", "#C4B5FD",
    ];
    const types = ["circle", "triangle", "square", "hexagon"];

    const newShapes = Array.from({ length: 35 }).map(() => ({
      size: 20 + Math.random() * 80,
      left: Math.random() * 100,
      top: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: types[Math.floor(Math.random() * types.length)],
      delay: Math.random() * 4,
      duration: 10 + Math.random() * 10,
    }));
    setShapes(newShapes);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 25, 0],
            rotate: [0, 360],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {s.shape === "circle" && (
            <div
              className="rounded-full shadow-lg shadow-pink-200/50"
              style={{ backgroundColor: s.color, width: "100%", height: "100%" }}
            />
          )}
          {s.shape === "triangle" && (
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: `${s.size / 2}px solid transparent`,
                borderRight: `${s.size / 2}px solid transparent`,
                borderBottom: `${s.size}px solid ${s.color}`,
                filter: "drop-shadow(0 0 6px rgba(255,255,255,0.3))",
              }}
            />
          )}
          {s.shape === "square" && (
            <div
              className="shadow-md shadow-pink-100/40"
              style={{
                backgroundColor: s.color,
                width: "100%",
                height: "100%",
                borderRadius: "8px",
              }}
            />
          )}
          {s.shape === "hexagon" && (
            <div
              style={{
                backgroundColor: s.color,
                clipPath:
                  "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                width: "100%",
                height: "100%",
                filter: "drop-shadow(0 0 6px rgba(255,255,255,0.3))",
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
