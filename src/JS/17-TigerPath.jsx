

import React, { useState } from 'react';
import NavBar from "../element/navBar";



const TigerPath = () => {
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  
  

  const count = (row, col) => {
    if (col === 1 || row === 1) {
      return 1;
    } else {
      const newGrid = Array(row).fill(Array(col).fill(0));
      for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
          if (i === 0 || j === 0) {
            newGrid[i][j] = 1;
          } else {
            newGrid[i][j] = newGrid[i - 1][j] + newGrid[i][j - 1];
          }
        }
      }
      const totalPaths = newGrid[row - 1][col - 1];

      // Find all routes
      const allRoutes = [];
      const findRoutes = (r, c, currentPath, grid) => {
        if (r === row - 1 && c === col - 1) {
          console.log("ลลล" + currentPath.slice());
          allRoutes.push(currentPath.slice());
          console.log("ฟสส" + allRoutes);
          return;
        }
        if (r + 1 < row && grid[r + 1][c] > 0) { //↓
          currentPath.push([r + 1, c]);
          findRoutes(r + 1, c, currentPath, grid);
          currentPath.pop();
        }
        if (c + 1 < col && grid[r][c + 1] > 0) { //→
          currentPath.push([r, c + 1]);
          findRoutes(r, c + 1, currentPath, grid);
          currentPath.pop();
        }
      };
      findRoutes(0, 0, [[0, 0]], newGrid);
      setGrids(allRoutes);
      setShowPaths(true);
      console.log("hj" + allRoutes);
      return totalPaths;
    }
  };

  const handleCalculate = () => {
    count(row, col);
  };

  const handleReset = () => {
    setRow(0);
    setCol(0);
    setGrids([]);
    setShowPaths(false);
  };

  return (
    <>
      <NavBar />
      <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
        <div className="relative w-[700px]">
          <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
            <div className="mb-8 text-center text-5xl font-extrabold text-white">TigerPath</div>
            <label>
              Enter the dimensions of the forest area (row col):
              <input
                className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="number"
                value={row}
                onChange={(e) => setRow(parseInt(e.target.value))} />

              <input
                className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="number"
                value={col}
                onChange={(e) => setCol(parseInt(e.target.value))} />
            </label>

            <button
              className='mt-2 w-full text-white bg-green-900 hover:bgreen-800  font-medium rounded-lg text-sm px-5 py-2.5'
              onClick={handleCalculate}>Calculate Paths</button>
            <button
              className='mt-2 w-full text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'
              onClick={handleReset}>Reset</button>

          </div>
        </div>
      </div>
    </>
  );
};

export default TigerPath;




