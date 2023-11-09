
import React, { useState } from 'react';
import NavBar from '../element/navBar';

const CopyEnd = () => {
    const [inputString, setInputString] = useState('');
    const [result, setResult] = useState('');

    const handleStringChange = (e) => {
        setInputString(e.target.value);
    };

    const generateExtraEnd = () => {
        if (inputString.length >= 2) {
            const lastTwoChars = inputString.slice(-2);
            setResult(lastTwoChars + lastTwoChars + lastTwoChars);
        } else {
            setResult('String length should be at least 2.');
        }
    };


    return (
        <><NavBar/>
         <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
                <div className="relative w-[700px]">
                    <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
                        <div className="mb-8 text-center text-5xl font-extrabold text-white">CopyEnd</div>
            <input
                type="text"
                value={inputString}
                onChange={handleStringChange}
                placeholder="Enter a string"
                className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"

            />
            <br />
            <button 
                                className='mr-2 mt-2 w-full text-white bg-green-900 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5'

            onClick={generateExtraEnd}>Generate</button>
            <p>Result: {result}</p>
        </div>
        </div>
        </div>
        </>
    );
};

export default CopyEnd;

