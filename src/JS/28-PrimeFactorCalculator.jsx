import React, { useState } from 'react';
import NavBar from '../element/navBar';

const PrimeFactorCalculator = () => {
    const [input, setInput] = useState('');
    const [primeCount, setPrimeCount] = useState(new Array(101).fill(0));

    const calculatePrimeFactors = (n) => {
        let updatedPrimeCount = new Array(101).fill(0);
        for (let i = 2; i <= n; i++) {
            let num = i;
            for (let j = 2; j <= num; j++) {
                while (num % j === 0) {
                    updatedPrimeCount[j]++;
                    num /= j;
                }
            }
        }
        setPrimeCount(updatedPrimeCount);
    };

    const displayPrimeFactors = () => {
        let result = '';
        for (let i = 1; i <= 100; i++) {
            if (primeCount[i] > 0) {
                result += primeCount[i] + ' ';
            }
        }
        return result;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const number = parseInt(input);
        if (number === 1) {
            setPrimeCount([0, 0]);
        } else if (number < 1 || number > 100 || isNaN(number)) {
            alert('Invalid input. Please enter a positive integer between 1 and 100.');
        } else {
            setPrimeCount(new Array(101).fill(0)); // Reset the prime count before calculation
            calculatePrimeFactors(number);
        }
    };

    return (
        <>
            <NavBar />
            <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
                <div className="relative w-[700px]">
                    <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
                        <div className="mb-8 text-center text-5xl font-extrabold text-white">PrimeFactorCalculator</div>



                        <input type="text"
                            placeholder='Enter a positive integer (1 ≤ n ≤ 100)'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />

                        <button
                            className='mr-2 mt-2 w-full text-white bg-green-900 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5'

                            onClick={handleSubmit}>Calculate</button>
                        <p className="mt-5 text-xl text-black font-bold">Result is: <span className=" text-white 0 font-bold">{displayPrimeFactors() !== null ? `${displayPrimeFactors()}` : ""}</span></p>


                    </div>
                </div>
            </div>

        </>
    );
};

export default PrimeFactorCalculator;
