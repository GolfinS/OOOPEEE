import React, { useState,useEffect } from 'react';
import NavBar from "../element/navBar";


const SumOfInt = () => {
  const [num, setNum] = useState('0');
  const [sum, setSum] = useState('0');




  const inputNum = (e) => {
    console.log(e.target.value);
    setNum(e.target.value);
  };

  const calculateSum = () => {
    if (num < 0 || num > 1000) {
      alert('OUT OF RANGE');
    } else {
      const sumOfDigits = num
        .toString()
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0);
      setSum(sumOfDigits);
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
        <div className="relative w-[600px]">
          <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
            <div className="mb-6 text-center text-5xl font-extrabold text-white">Sum of Integer</div>


            <input
              type="number"
              value={num}
              onChange={inputNum}
              className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"

            />
            <button
              className='mt-2 w-full text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'
              onClick={calculateSum}>Calculate Sum
              </button>

            <p className="mt-5 text-xl text-black font-bold">Sum of Digits: <span className=" text-white font-semibold">{sum !== null && `${sum}`}</span></p>

          </div>
        </div>
      </div>
    </>
  );

};

export default SumOfInt;
