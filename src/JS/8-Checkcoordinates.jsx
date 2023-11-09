import React, {  useState, useEffect } from 'react';
import NavBar from "../element/navBar";


const Checkcoordinates = () => {

  const [x1, setX1] = useState("");
  const [y1, setY1] = useState("");
  const [m, setM] = useState("");
  const [n, setN] = useState("");
  const [x0, setX0] = useState("");
  const [y0, setY0] = useState("");
  const [result, setResult] = useState('');
 
  

  const checkPoint = () => {
    let x1Num = parseFloat(x1);
    let y1Num = parseFloat(y1);
    let mNum = parseFloat(m);
    let nNum = parseFloat(n);
    let x0Num = parseFloat(x0);
    let y0Num = parseFloat(y0);

    if (
      x0Num >= x1Num && x0Num <= x1Num + nNum && y0Num >= y1Num && y0Num <= y1Num + mNum
    ) {
      setResult('Yes');
    } else {
      setResult('No');
    }
  };



  return (
    <>
      <NavBar />
      <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
        <div className="relative w-[700px]">
          <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
            <div className="mb-8 text-center text-5xl font-extrabold text-white">Cheack Coordinates</div>

            <div className='grid grid-cols-2'>
              <input
                className="m-2 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder='x1'
                type="number"
                value={x1}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (!isNaN(newValue) || newValue === '-' || newValue === '') {
                    setX1(newValue);
                  }
                }}
              />

              <input
                className="m-2 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"

                placeholder=' y1'
                type="number"

                value={y1}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (!isNaN(newValue) || newValue === '-' || newValue === '') {
                    setY1(newValue);
                  }
                }}
              />


              <input
                className="m-2 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"

                placeholder='m'
                type="number"
                value={m}
                onChange={(e) => setM(parseFloat((e.target.value)))}
              />


              <input
                className="m-2 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"

                placeholder='n'
                type="number"
                value={n}
                onChange={(e) => setN(parseFloat((e.target.value)))}
              />

              <input
                className="m-2 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"

                placeholder='x0'
                type="number"
                value={x0}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (!isNaN(newValue) || newValue === '-' || newValue === '') {
                    setX0(newValue);
                  }
                }}
              />


              <input
                className="m-2 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="y0"
                type="number"
                min="0"
                value={y0}
                onChange={(e) => {
                  const newValue = e.target.value;
                  if (!isNaN(newValue) || newValue === '-' || newValue === '') {
                    setY0(newValue);
                  }
                }}
              />
            </div>
            <button
              onClick={checkPoint}
              className='mt-2 w-full text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'>Check Point
            </button>
            <p className="mt-5 text-xl text-black font-bold">Result is: <span className=" text-white 0 font-bold">{result !== null ? `${result}` : ""}</span></p>
          </div>
        </div>
      </div>
    </>

  );
};

export default Checkcoordinates;


