import React, { useState } from 'react';
import NavBar from "../element/navBar";

const MixCal = () => {
  const [numbers, setNumbers] = useState('5,10,20,10,20');
  const [average, setAverage] = useState(0);
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const [standardDeviation, setStandardDeviation] = useState(0);

  const inputNumbers = (e) => {
    setNumbers(e.target.value)

  }
  const handleCalculate = () => {
    console.log(numbers)
    const numArray = numbers.split(',').map(Number);
    const n = numArray.length;

    const sum = numArray.reduce((acc, curr) => acc + curr, 0);
    const avg = sum / n;
    setAverage(avg);

    const maxNum = Math.max(...numArray);
    setMax(maxNum);

    const minNum = Math.min(...numArray);
    setMin(minNum);

    const squaredDiffs = numArray.map((num) => Math.pow(num - avg, 2));
    const variance = squaredDiffs.reduce((acc, curr) => acc + curr, 0) / n;
    const sd = Math.sqrt(variance);
    setStandardDeviation(sd);
  };

  return (
    <><NavBar />
      <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
        <div className="relative w-[450px]">
          <div className="relative my-12 px-12 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
            <div className="mb-8 text-center text-5xl font-extrabold text-white">All in One</div>

            <input
              placeholder='จำนวนตัวเลข n ตัว ขั้นด้วย ,'
              className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              type="text"
              value={numbers}
              onChange={inputNumbers}
            />
         
          <button className='mt-3 w-full text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'
          onClick={handleCalculate}>คำนวณ</button>

          <div className='mt-3 flex items-center'>
            <p className='mr-3'>ค่าเฉลี่ย: <span className='text-white font-bold'>{average}</span></p>
            <p className='mr-3' >ค่ามากสุด: <span className='text-white font-bold'>{max}</span></p>
            <p className='mr-3'>ค่าน้อยสุด: <span className='text-white font-bold'>{min}</span></p>
            <p className='mr-3'>ค่า SD: <span className='text-white font-bold'>{standardDeviation}</span></p>
          </div>
        </div>
        </div>
        </div>
      </>
      );
};

      export default MixCal;
