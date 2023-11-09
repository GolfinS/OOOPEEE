import React, { useState, useEffect } from 'react';
import NavBar from '../element/navBar';

const ReverseInteger = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [isValid, setIsValid] = useState(true);
    




    useEffect(() => {
        const value = input;
        if ((101 <= parseInt(value) && parseInt(value) <= 9999999)) {
            const reversed = parseInt(value.split('').reverse().join(''), 10);
            setResult(reversed);
            setIsValid(true);
        } else {
            setResult(null);
            setIsValid(false);
        }
    }, [input]);
    
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <>
            <NavBar />
            <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
                <div className="relative w-[700px]">
                <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
                <div className="mb-8 text-center text-5xl font-extrabold text-white">Reverse Integer</div>
                        <p className="mt-5 leading-snug text-white">Enter an integer between 101 and 9999999:</p>
                        <input
                            type="number"
                            value={input}
                            onChange={handleInputChange}
                            className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <p className={`mt-3 leading-snug text-center text-xl ${isValid ? 'text-black' : 'text-white font-extrabold'}`}>
                            {result !== null ? (
                                <span className="font-normal">The reverse of <span className="font-bold">{input}</span> is: <span className="font-bold">{result}</span></span>
                            ) : "Invalid input. Please enter a valid number."}
                        </p>
                        
                    </div>

                    
                </div>
            </div>
        </>
    );
};

export default ReverseInteger;
