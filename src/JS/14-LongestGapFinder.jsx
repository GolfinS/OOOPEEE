import React, { useState } from 'react';

const LongestGapFinder = () => {
  const [UpData, setUpData] = useState('');
  const [DownData, setDownData] = useState('');
  const [longestGap, setLongestGap] = useState(null);

  const findLongestGap = () => {
    const UP = UpData.split(' ').map(Number);
    const DOWN = DownData.split(' ').map(Number);

    let combinedLane = [...UP, ...DOWN];
    combinedLane.sort((a, b) => b - a);

    let longestGap = 0;
    for (let i = 0; i < combinedLane.length - 1; i++) {
      let gap = combinedLane[i] - combinedLane[i + 1];
      if (gap > longestGap) {
        longestGap = gap;
      }
    }

    setLongestGap(longestGap);
    console.log(longestGap)
  };

  return (
    <>
      <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
        <div className="relative w-[700px]">
          <div className="relative my-12 px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
            <div className="mb-8 text-center text-5xl font-extrabold text-white">LongestGapFinder</div>
            <input
              placeholder='Enter the vehicles in the up lane'
              className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              type="text"
              value={UpData}
              onChange={(e) => setUpData(e.target.value)}
            />

            <input
              className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder='Enter the vehicles in the down lane'
              type="text"
              value={DownData}
              onChange={(e) => setDownData(e.target.value)}
            />

            <div>
              <button
                className='mt-3 w-full text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'
                onClick={findLongestGap}>Find Longest Gap</button>
            </div>

            <p className='mt-5 text-black'>The longest gap without a passing vehicle: <span className='text-white font-bold'>{longestGap !== null ? `${longestGap}` : ""}</span></p>

          </div>
        </div>
      </div>

    </>
  );
};

export default LongestGapFinder;
