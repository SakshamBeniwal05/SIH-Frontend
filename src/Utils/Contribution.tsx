import { useState, useEffect, useRef } from "react";

export default function Contribution() {
  const rows: number = 7; // fixed rows
  const cellSize = 16; // px size of each square
  const gap = 4; // px gap between squares

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [cols, setCols] = useState<number>(20); // initial cols
  const [grid, setGrid] = useState<boolean[][]>([]);

  // Recalculate number of columns based on container width
  useEffect(() => {
    const updateCols = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const newCols = Math.floor(width / (cellSize + gap));
        setCols(newCols > 0 ? newCols : 1);
      }
    };

    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  // Reset grid whenever column count changes
  useEffect(() => {
    setGrid(Array.from({ length: rows }, () => Array(cols).fill(false)));
  }, [rows, cols]);

  // Toggle cell on click
  const toggleCell = (r: number, c: number) => {
    const newGrid = grid.map((row, rowIndex) =>
      row.map((cell, colIndex) =>
        rowIndex === r && colIndex === c ? !cell : cell
      )
    );
    setGrid(newGrid);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 w-full">
      <h1 className="text-xl font-bold">Contribution Calendar</h1>
      <div
        ref={containerRef}
        className="w-full overflow-x-auto"
      >
        <div
          className="grid gap-1"
          style={{
            gridTemplateRows: `repeat(${rows}, minmax(${cellSize}px, 1fr))`,
            gridTemplateColumns: `repeat(${cols}, minmax(${cellSize}px, 1fr))`,
          }}
        >
          {grid.map((row, rIdx) =>
            row.map((cell, cIdx) => (
              <div
                key={`${rIdx}-${cIdx}`}
                onClick={() => toggleCell(rIdx, cIdx)}
                className={`w-4 h-4 rounded-sm cursor-pointer transition 
                  ${cell ? "bg-green-500" : "bg-gray-200 hover:bg-gray-300"}`}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
