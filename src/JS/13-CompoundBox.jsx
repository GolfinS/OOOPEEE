import React, { useState } from 'react';
import NavBar from "../element/navBar";
import { sort } from 'mathjs';

const CompoundBox = () => {
  const [values, setValues] = useState(Array(12).fill(''));
  const [result, setResult] = useState(null);

  const handleInputChange = (index, event) => {
    const newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);
  };

  const canFormBox = (a, b) => {
    let result = [];
    for (let i = 0; i < 6; i++) {
      result[i] = a[i] * b[i];
    }
    result = sort(result);

    let count = 0;
    for (let i = 0; i < 6; i += 2) {
      if (result[i] === result[i + 1]) {
        count++;
      }
    }

    return count === 3;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Check if all input fields are filled
    if (values.every((value) => value !== '')) {
      const a = values.slice(0, 6).map(Number);
      const b = values.slice(6, 12).map(Number);
      if (canFormBox(a, b)) {
        setResult('Y');
      } else {
        setResult('N');
      }
    } else {
      alert('Please fill all the input fields.');
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
        <div className="relative w-[620px]">
          <div className="relative px-16 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
            <div className="mb-8 text-center text-5xl font-extrabold text-white">Compound Box</div>

            {[...Array(6).keys()].map((index) => (
              <div key={index}>
                <input
                  placeholder='Width'
                  className="mr-6 w-50% mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  type="number"
                  value={values[index]}
                  onChange={(e) => handleInputChange(index, e)}
                />
                <input
                  placeholder='Length'
                  className="w-50% mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  type="number"
                  value={values[index + 6]}
                  onChange={(e) => handleInputChange(index + 6, e)}
                />
              </div>
            ))}

            <button
              className="w-full mt-4 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded"
              onClick={handleFormSubmit}
            >
              Check
            </button>

           
              <p className="mt-5 text-xl text-black font-bold">
                Can Make Box is: 
                <span className="text-white 0 font-bold">{result !== null ? `${result}`:""}</span>
              </p>
             
          </div>
        </div>
      </div>
    </>
  );
};

export default CompoundBox;
