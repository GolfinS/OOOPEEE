import React, { useState, useEffect } from 'react';
import NavBar from "../element/navBar";

const ThreeMaxFinder = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [max, setMax] = useState(null);


   



    const handleNum1Change = (e) => {
        setNum1(e.target.value);
    };

    const handleNum2Change = (e) => {
        setNum2(e.target.value);
    };

    const handleNum3Change = (e) => {
        setNum3(e.target.value);
    };

    const findMax = () => {
        const maxVal = Math.max(num1, num2, num3);
        setMax(maxVal);
    };

    return (
        <>
            <NavBar />
            <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
            <div className="relative w-[700px]">
            <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">

                        <div className="mb-8 text-center text-5xl font-extrabold text-white">Three Maxfider</div>
                        <p className="mt-5 leading-snug text-white">Enter the 3 numbers:</p>

                        <input
                            type="number"
                            value={num1}
                            onChange={handleNum1Change}
                            className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <input
                            type="number"
                            value={num2}
                            onChange={handleNum2Change}
                            className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <input
                            type="number"
                            value={num3}
                            onChange={handleNum3Change}
                            className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />

                        <button 
                            className='mt-2 w-full text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'
                            onClick={findMax}>Find Maximum</button>

                        <p className='mt-5 text-xl text-black font-bold'>Maximum value is: <span className='text-white font-bold'>{max !== null ? `${max}` : ""}</span></p>

                    </div>

                </div>
            </div>

        </>

    );
}

export default ThreeMaxFinder;
