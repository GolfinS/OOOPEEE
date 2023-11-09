import React, { useState } from 'react';
import NavBar from "../element/navBar";

const Phone = () => {
  const initialRows = 4;
  const initialCols = 4;
  const [rows, setRows] = useState(initialRows);
  const [cols, setCols] = useState(initialCols);
  const [matrix, setMatrix] = useState([...Array(initialRows)].map(() => Array(initialCols).fill(0)));
  const [Result, setResult] = useState(null);

  const handleRowsDecrement = () => {
    if (rows > 2) {
      setRows(rows - 1);
      setMatrix(matrix.slice(0, -1));
    }
  };

  const handleRowsIncrement = () => {
    setRows(rows + 1);
    setMatrix([...matrix, Array(cols).fill(0)]);
  };

  const handleColsDecrement = () => {
    if (cols > 2) {
      setCols(cols - 1);
      const newMatrix = matrix.map(row => row.slice(0, -1));
      setMatrix(newMatrix);
    }
  };

  const handleColsIncrement = () => {
    setCols(cols + 1);
    const newMatrix = matrix.map(row => [...row, 0]);
    setMatrix(newMatrix);
  };

  const handleReset = () => {
    setRows(4);
    setCols(4);
    setMatrix([...Array(4)].map(() => Array(4).fill(0)));
    setResult(null);
  };

  const handleInputChange = (e, i, j) => {
    const value = e.target.value;
    const newMatrix = matrix.map((row, rowIndex) =>
      row.map((col, colIndex) => (rowIndex === i && colIndex === j ? parseInt(value) : col))
    );
    setMatrix(newMatrix);
  };

  const findMobileLocation = () => {
    let max_people = -Infinity;
    let location = { row: -1, col: -1 };

    for (let i = 0; i < matrix.length - 1; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (Math.abs(matrix[i][j] - matrix[i + 1][j]) <= 10) {
          let sum = matrix[i][j] + matrix[i + 1][j];
          if (sum > max_people) {
            max_people = sum;
            location.row = i;
            location.col = j;
          }
        }
      }
    }
    setResult(`${location.row + 1} ${location.col + 1}`); 
  };

  return (
    <>
    <NavBar />
    <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
       
          <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
            <div className="mb-8 text-center text-5xl font-extrabold text-white">MobileSensor</div>
        

        <table className="m-auto">
          <tbody>
            {matrix.map((row, i) => (
              <tr key={i}>
                {row.map((col, j) => (
                  <td key={j}>
                    <input
                      type="number"
                      value={matrix[i][j]}
                      onChange={(e) => handleInputChange(e, i, j)}
                      className="w-16 h-10 m-1 text-center rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mb-4 flex justify-between items-center">
          
          
       
          <button onClick={handleRowsDecrement} className='m-3  w-[50px] text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'>-</button>
          <p className=" text-white">Rows</p>
          <button onClick={handleRowsIncrement} className='m-3  w-[50px] text-white bg-green-900 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5'>+</button>
         
         
          <button onClick={handleColsDecrement} className='m-3  w-[50px] text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'>-</button>
          <p className=" text-white">Columns</p>
          <button onClick={handleColsIncrement} className='m-3  w-[50px] text-white bg-green-900 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5'>+</button>
     
        </div>
        <button onClick={findMobileLocation} className='mt-2 w-full text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'>Solve</button>
        <button onClick={handleReset} className='mt-2 w-full text-white bg-gray-900 hover:bg-gray-800  font-medium rounded-lg text-sm px-5 py-2.5'>Reset</button>
        <p className="mt-4 text-xl font-bold">Result is: <span className="text-white font-bold">{Result !== null ? `${Result}` : ""}</span></p>

      </div>
    </div>
   
     </>
  );
};

export default Phone;
