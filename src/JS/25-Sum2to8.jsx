import React, { useState } from 'react';
import NavBar from "../element/navBar";

const Sum2to8 = () => {
  const [array, setArray] = useState('');
  const [Result, setResult] = useState(null);

  const hasSumOf8 = () => {
    const Data = array.split(',').map(Number);
    let sum = 0;
    for (let i = 0; i < Data.length; i++) {
      if (Data[i] === 2) {
        sum += 2;
      }
    }
    setResult(sum === 8);
   
  };

  return (
    <>
      <NavBar />
      <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
        <div className="relative w-[700px]">
          <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
            <div className="mb-8 text-center text-5xl font-extrabold text-white">SSum2to8</div>

            <input
              className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              type="text"
              value={array}
              onChange={(e) => setArray(e.target.value)}
            />

            <button
              className='mt-2 w-full text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'
              onClick={hasSumOf8}>Show Result</button>

            <p className="mt-5 text-xl text-black font-bold">Result is: <span className=" text-white 0 font-bold">{Result !==null ? `${Result}` : ""}</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sum2to8;
