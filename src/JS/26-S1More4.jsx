import React, { useState } from 'react';
import NavBar from "../element/navBar";

const S1More4 = () => {
  const [numbers, setNumbers] = useState(''); // initialize with an empty string
  const [result, setResult] = useState(null);

  const getResult = () => {
    const data = numbers.split(',').map(Number); // convert the string to an array of numbers

    const count1 = data.filter((num) => num === 1).length; // compare with numbers, not strings
    const count4 = data.filter((num) => num === 4).length; // compare with numbers, not strings
    setResult(count1 > count4);
  };

  return (
    <>
      <NavBar />
      <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
        <div className="relative w-[700px]">
          <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
            <div className="mb-8 text-center text-5xl font-extrabold text-white">S1More4</div>

            <input
              className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              type="text"
              value={numbers}
              onChange={(e) => setNumbers(e.target.value)}
            />

            <button
              className='mt-2 w-full text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'
              onClick={getResult}>Get Result</button>
            <p className="mt-5 text-xl text-black font-bold">Result is: <span className=" text-white 0 font-bold">{result !== null ? `${result}` : ""}</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default S1More4;
