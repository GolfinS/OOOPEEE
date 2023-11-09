import React, { useState } from 'react';
import NavBar from '../element/navBar';

const CopyStr = () => {
    const [inputString, setInputString] = useState('');
    const [inputNumber, setInputNumber] = useState(0);
    const [result, setResult] = useState('');

    const handleStringChange = (e) => {
        setInputString(e.target.value);
    };

    const handleNumberChange = (e) => {
        setInputNumber(parseInt(e.target.value));
    };

    const generateString = () => {
        let generatedString = '';
        for (let i = 0; i < inputNumber; i++) {
            generatedString += inputString;
        }
        setResult(generatedString);
    };

    return (
        <><NavBar />
            <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
                <div className="relative w-[700px]">
                    <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
                        <div className="mb-8 text-center text-5xl font-extrabold text-white">CopyStr</div>
                        <input
                            type="text"
                            value={inputString}
                            onChange={handleStringChange}
                            placeholder="Enter a string"
                            className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"

                        />
                        <br />
                        <input
                            type="number"
                            value={inputNumber}
                            onChange={handleNumberChange}
                            placeholder="Enter a non-negative number"
                            className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"

                        />
                        <br />
                        <button
                            className='mr-2 mt-2 w-full text-white bg-green-900 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5'

                            onClick={generateString}>Generate</button>
                        
                        <div
                            className="mt-3 overflow-y-hidden max-h-40"
                        >
                            <p>Result: {result}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CopyStr;
