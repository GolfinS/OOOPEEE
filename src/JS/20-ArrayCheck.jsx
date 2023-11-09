import React, { useState } from 'react';
import NavBar from "../element/navBar";
const hasFourConsecutive = (n, arr) => {
  let consecutiveCells = [];

  // Check horizontally
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= n - 4; j++) {
      if (
        arr[i][j] === arr[i][j + 1] &&
        arr[i][j] === arr[i][j + 2] &&
        arr[i][j] === arr[i][j + 3]
      ) {
        consecutiveCells.push([i, j], [i, j + 1], [i, j + 2], [i, j + 3]);
      }
    }
  }

  // Check vertically
  for (let i = 0; i <= n - 4; i++) {
    for (let j = 0; j < n; j++) {
      if (
        arr[i][j] === arr[i + 1][j] &&
        arr[i][j] === arr[i + 2][j] &&
        arr[i][j] === arr[i + 3][j]
      ) {
        consecutiveCells.push([i, j], [i + 1, j], [i + 2, j], [i + 3, j]);
      }
    }
  }

  // Check diagonally (top-left to bottom-right)
  for (let i = 0; i <= n - 4; i++) {
    for (let j = 0; j <= n - 4; j++) {
      if (
        arr[i][j] === arr[i + 1][j + 1] &&
        arr[i][j] === arr[i + 2][j + 2] &&
        arr[i][j] === arr[i + 3][j + 3]
      ) {
        consecutiveCells.push([i, j], [i + 1, j + 1], [i + 2, j + 2], [i + 3, j + 3]);
      }
    }
  }

  // Check diagonally (bottom-left to top-right)
  for (let i = 3; i < n; i++) {
    for (let j = 0; j <= n - 4; j++) {
      if (
        arr[i][j] === arr[i - 1][j + 1] &&
        arr[i][j] === arr[i - 2][j + 2] &&
        arr[i][j] === arr[i - 3][j + 3]
      ) {
        consecutiveCells.push([i, j], [i - 1, j + 1], [i - 2, j + 2], [i - 3, j + 3]);
      }
    }
  }

  return consecutiveCells;
};

const ArrayCheck = () => {
  const [n, setN] = useState(0);
  const [matrix, setMatrix] = useState([]);
  const [result, setResult] = useState('');
  const [consecutiveCells, setConsecutiveCells] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setN(parseInt(value));
    setMatrix(new Array(parseInt(value)).fill(-1).map(() => new Array(parseInt(value)).fill(0)));
    //    fill 0 -> -1
  };

  const handleMatrixInputChange = (event, i, j) => {
    const value = event.target.value;
    const updatedMatrix = [...matrix];
    updatedMatrix[i][j] = parseInt(value);
    setMatrix(updatedMatrix);
  };

  const handleSubmit = () => {
    const consecutiveCellsResult = hasFourConsecutive(n, matrix);
    const hasResult = consecutiveCellsResult.length > 0;
    setConsecutiveCells(consecutiveCellsResult);
    setResult(hasResult ? 'TRUE' : 'FALSE');
  };


  const resetMatrix = () => {
    const resetMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    setMatrix(resetMatrix);
    setResult('');
    setConsecutiveCells([]);
  };

  const renderMatrixInput = () => {
    const matrixInputs = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push(
          <div className='flex justify-center items-center'>
            <input
              className="w-16 md:w-20 lg:w-24 xl:w-28 m-1 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-center"
              key={`${i}-${j}`}
              type="number"
              value={matrix[i][j]}
              onChange={(event) => handleMatrixInputChange(event, i, j)}
            />
          </div>
        );
      }
      matrixInputs.push(
        <div key={i} className="flex justify-center items-center">
          {row}
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center">
        {matrixInputs}
      </div>
    );
  };


 
  return (
    <>
      <NavBar />
      <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">

        <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
          <div className="mb-8 text-center text-5xl font-extrabold text-white">ArrayChecker</div>

          <label className='mr-2'>Enter the size of the table (nxn):</label>
          <input
            className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            type="number"
            onChange={handleInputChange} />

          <div className='mb-4'>
            <label className='mr-2'>Enter the numbers in each row:</label>
            {n < 7 &&n > 0 && renderMatrixInput()}
          </div>
          <div className='w-full flex justify-center items-center'>
          <button
            className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={handleSubmit}
          >
            Check
          </button>
          <button
            className='w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4'
            onClick={resetMatrix}
          >
            Reset
          </button>
          </div>

          <div className='flex justify-center items-center my-4 text-xl font-bold'>{result}</div>
         
      </div> </div>


    </>
  );
};

export default ArrayCheck;
