import React, { useState } from 'react';
import NavBar from "../element/navBar";

const SInverse = () => {

    const [array, setArray] = useState([]);
    const [result, setResult] = useState(0);



    const countGreater = () => {
        const Data = array.split(',').map(Number);

        let greaterCount = 0;

        for (let i = 0; i < Data.length - 1; i++) {
            for (let j = i + 1; j < Data.length; j++) {
                if (Data[i] > Data[j]) {
                    greaterCount++;
                }
            }
        }

        setResult(greaterCount);
    };

    return (
        <>
            <NavBar />
            <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
                <div className="relative w-[700px]">
                    <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">

                        <div className="mb-8 text-center text-5xl font-extrabold text-white">SInverse</div>


                        <input
                            type="text"
                            value={array}
                            onChange={(e) => setArray(e.target.value)}
                            placeholder={`Enter value (1,2,..,N)`}
                            className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"

                        />
                        <button
                            className='mt-2 w-full text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'

                            onClick={countGreater}>Count</button>
                        <p className="mt-5 text-xl text-black font-bold">Result of the equation is: <span className=" text-white 0 font-bold">{result !== null ? `${result}` : ""}</span></p>


                    </div>
                </div>
            </div>

        </>
    );
};

export default SInverse;
