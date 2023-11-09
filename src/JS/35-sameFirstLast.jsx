import React, { useState } from 'react';
import NavBar from '../element/navBar';

const SameFirstLast = () => {
    const [arraySize, setArraySize] = useState(0);
    const [result, setResult] = useState(null);

    

    const checkSameFirstLast = () => {
        const Data = arraySize.split(',').map(Number);
        if (Data.length >= 1) {
            const first = Data[0];
            const last = Data[Data.length - 1];
            setResult(first === last ? 'true' : 'false');
        } else {
            setResult('');
        }
    };

    const resetValues = () => {
        setArraySize(0);
        setResult('');
    };

   

    return (
        <><NavBar/>
         <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
                <div className="relative w-[700px]">
                    <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
                        <div className="mb-8 text-center text-5xl font-extrabold text-white">SameFirstLast</div>
            <input
                type="text"
                value={arraySize}
                onChange={(e)=> setArraySize(e.target.value)}
                placeholder="Enter array"
                className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"

            />
          
            
    <div className='flex '>
            <button 
                    className='mr-2 mt-2 w-full text-white bg-green-900 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5'

            onClick={checkSameFirstLast}>Check</button>
            <button 
                    className='mt-2 w-full text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'

            onClick={resetValues}>Reset</button>


            </div>
            <p className="mt-5 text-xl text-black font-bold">Result is: <span className=" text-white 0 font-bold">{result !== null ? `${result}` : ""}</span></p>

        </div>
        </div>
        </div>
        </>
    );
};

export default SameFirstLast;
