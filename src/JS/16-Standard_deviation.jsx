import React, { useState } from 'react';
import NavBar from "../element/navBar";
const Standard_deviation = () => {
  const [numbers, setNumbers] = useState('');
  const [standardDeviation, setStandardDeviation] = useState(0);

  const inputNumbers = (e) => {
    setNumbers(e.target.value)

  }
  const handleCalculate = () => {
    const numArray = numbers.split(',').map(Number);
    const n = numArray.length;

    const mean = numArray.reduce((acc, curr) => acc + curr, 0) / n;

    const squaredDiffs = numArray.map((num) => Math.pow(num - mean, 2));
    const variance = squaredDiffs.reduce((acc, curr) => acc + curr, 0) / n;
    const sd = Math.sqrt(variance);
    setStandardDeviation(sd);
  };

  return (
    <><NavBar />

      <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
        <div className="relative w-[450px]">
          <div className="relative my-12 px-14 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
            <div className="mb-8 text-center text-5xl font-extrabold text-white">SD Calculator</div>

            <input
              className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"

              placeholder='จำนวนตัวเลข n ตัว:'
              type="text"
              value={numbers}
              onChange={inputNumbers}
            />

            <button
              className='mt-3 w-full text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'
              onClick={handleCalculate}>คำนวณ SD</button>

            <div className='flex justify-center'>
              <p className='mt-3 '>ค่า SD: {standardDeviation}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Standard_deviation;
