import React, { useState } from "react";

const First_Equation = () => {
    const [result, setResult] = useState(null);
    const [x, setX] = useState("0");

    const inputX = (e) => {
        console.log(e.target.value);
        setX(e.target.value);
    };

    const calculateResult = () => {
        const xValue = parseInt(x, 10);
        if (!isNaN(xValue)) {
            const equationResult =
                3 * Math.pow(xValue, 4) + 2 * Math.pow(xValue, 3) - xValue + 10;
            setResult(equationResult);
        } else {
            alert("Please enter a valid number.");
        }
    };
    //bg-[url('/img/moon.jpg')] bg-cover bg-fixed
    return (
        <>
            <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
                <div className="relative w-[700px]">
                    <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
                        <div className="mb-8 text-center text-5xl font-extrabold text-white">Equation Calculator</div>
                        <p className="font-bold mt-5 leading-snug text-white">Enter the value of x:
                            <span><math className="ml-2 text-xl font-extrabold mt-5 leading-snug text-black" xmlns="http://www.w3.org/1998/Math/MathML"><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mo>&#x2212;</mo><mi>x</mi><mo>+</mo><mn>10</mn></math></span>
                        </p>
                        <input
                            id="x-input"
                            type="number"
                            value={x}
                            onChange={inputX}
                            className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />


                        <button
                            className='mt-2 w-full text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'
                            onClick={calculateResult}>Calculate
                        </button>

                        <p className="mt-5 text-xl text-black font-bold">Result of the equation is: <span className=" text-white 0 font-bold">{result !== null ? `${result}` : ""}</span></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default First_Equation;
