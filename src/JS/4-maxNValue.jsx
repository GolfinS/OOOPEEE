import React, { useState, useEffect } from 'react';
import NavBar from "../element/navBar";

const NMaxFinder = () => {
    const [numbers, setNumbers] = useState([0,0,0]); 
    const [max, setMax] = useState(null);



  

    const handleNumberChange = (index, value) => {
        const updatedNumbers = [...numbers];
        updatedNumbers[index] = value;
        setNumbers(updatedNumbers);
    };

    const handleInputChange = (index) => (e) => {
        handleNumberChange(index, e.target.value);
    };

    const addInput = () => {
        const updatedNumbers = [...numbers, 0];
        setNumbers(updatedNumbers);
    };

    const removeInput = (index) => {
        if (numbers.length > 1) {
            const updatedNumbers = numbers.filter((_, i) => i !== index);
            setNumbers(updatedNumbers);
        }
    };

    const findMax = () => {
        const maxVal = Math.max(...numbers);
        setMax(maxVal);
    };

    return (
        <>
            <NavBar />
            <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
                <div className="relative w-[700px]">
                    <div className="relative my-12 px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
                        <div className="mb-8 text-center text-5xl font-extrabold text-white">N_Max Finder</div>
                        
                        <div className="flex justify-between">
                        
                           
                         <button className='mt-2 px-3 py-2 text-white bg-green-500 hover:bg-green-900 rounded-md' onClick={addInput}>Add</button>
                         <p className="font-bold mt-5 leading-snug text-white">Enter the numbers</p>
                            <button className='ml-2 mt-2 px-3 py-2 text-white bg-red-500  hover:bg-red-900 rounded-md' onClick={() => removeInput(numbers.length - 1)}>Remove</button>
                        </div>
                        {numbers.map((number, index) => (
                            <input
                                key={index}
                                className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                type="number"
                                value={number}
                                onChange={handleInputChange(index)}
                            />
                        ))}
                        
                        <button className='mt-3 w-full text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5' onClick={findMax}>Find Maximum</button>
                        <p className='mt-5 text-black'>Maximum value is: <span className='text-white font-bold'>{max !== null ? `${max}` : ""}</span></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NMaxFinder;
