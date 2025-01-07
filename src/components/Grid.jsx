import React, { useEffect, useState } from "react";

const colors = [
  "bg-rose-500 shadow-rose-500",
  "bg-sky-500 shadow-sky-500",
  "bg-emerald-500 shadow-emerald-500",
  "bg-orange-500 shadow-orange-500",
  "bg-indigo-500 shadow-indigo-500",
  "bg-pink-500 shadow-pink-500",
  "bg-teal-500 shadow-teal-500",
];

const Grid = ({ rows, cols }) => {
  const [fallingBlocks, setFallingBlocks] = useState(
    Array.from({ length: cols }, () => ({
      start: Math.random() * rows,
      height: Math.floor(Math.random() * (rows / 3)) + 2,
      colorIndex: 0,
    }))
  );
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFallingBlocks((prevBlocks) =>
        prevBlocks.map((block) => {
          let newStart = block.start + 0.1;
          if (newStart >= rows) {
            return {
              start: 0,
              height: Math.floor(Math.random() * (rows / 3)) + 1,
              colorIndex: colorIndex,
            };
          }

          return { ...block, start: newStart };
        })
      );
    });

    const colorInterval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000); 

    return () => {
      clearInterval(interval);
      clearInterval(colorInterval);
    };
  }, [rows, cols, colorIndex]);

  return (
    <div
      className="grid gap-2"
      style={{
        gridTemplateColumns: `repeat(${cols * 2}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: rows * cols * 2 }).map((_, index) => {
        const row = Math.floor(index / (cols * 2));
        const col = index % (cols * 2);

        if (col % 2 !== 0)
          return <div key={index} className="w-8 h-8 bg-black"></div>;

        const blockIndex = Math.floor(col / 2);
        const { start, height, colorIndex } = fallingBlocks[blockIndex];
        const isBlock =
          row >= Math.floor(start) && row < Math.floor(start) + height;

        const colorClass = isBlock ? colors[colorIndex] : "bg-black";

        return (
          <div
            key={index}
            className={`w-8 h-8 ${colorClass} rounded-sm shadow-md transition-all duration-150`}
          ></div>
        );
      })}
    </div>
  );
};

export default Grid;
