import React, { useState } from 'react';
import NavBar from "../element/navBar";

const AverageCalculator = () => {
  const [numArray, setNumArray] = useState([]);
  const [average, setAverage] = useState(0);

  

  const calculateAverage = () => {
    const Data = numArray.split(',').map(Number);
    const sum = Data.reduce((acc, cur) => acc + cur, 0);
    const avg = Data.length > 0 ? sum / Data.length : 0;
    setAverage(avg);
  };

  return (
    <>
      <NavBar />
      <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
            <div className="relative w-[700px]">
                <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
     
                <div className="mb-8 text-center text-5xl font-extrabold text-white">Calculate Average</div>

      
            <input
              placeholder=' Enter dance data (space-separated)'
              type="text"
              value={numArray}
              onChange={(e) => setNumArray(e.target.value)}
              className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
           
           />
        <button 
        className='mt-2 w-full text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'
        onClick={calculateAverage}>Calculate Average</button>
        <div>
          <h3>Average: {average.toFixed(2)}</h3>
        </div>
      </div>
    </div> 
    </div>
   </>
  );
};

export default AverageCalculator;
