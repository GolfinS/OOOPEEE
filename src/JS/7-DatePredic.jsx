import React, { useState,useEffect } from 'react';
import NavBar from "../element/navBar";


const DatePredic = () => {
    const [startDate, setStartDate] = useState('');
    const [quantity, setQuantity] = useState('');
    const [endDate, setEndDate] = useState('');

    

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };


    const handleCalculate = () => {
        const calculatedEndDate = calculateEndDate(startDate, parseInt(quantity));
        setEndDate(calculatedEndDate);
    };


    const isLeapYear = (year) => {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return 1; // Leap year
        } else {
            return 0; // Not a leap year
        }
    };

    const calculateEndDate = (startDate, quantity) => {
        let [year, month, day] = startDate.split('-').map(Number);
        let i;

        for (i = 1; i <= quantity; i++) {
            day++;
            let isLeap = isLeapYear(year);
            let daysInMonth;

            switch (month) {
                case 2: // February
                    daysInMonth = isLeap ? 29 : 28;
                    break;
                case 4: // April
                case 6: // June
                case 9: // September
                case 11: // November
                    daysInMonth = 30;
                    break;
                default: // Other months
                    daysInMonth = 31;
            }

            if (day > daysInMonth) {
                day = 1;
                month++;
                if (month > 12) {
                    month = 1;
                    year++;
                }
            }
        }

        return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
    };


    return (
        <>
            <NavBar />
            <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
                <div className="relative w-[700px]">
                    <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
                        <div className="mb-8 text-center text-5xl font-extrabold text-white">Date Prediction</div>
                        <label>
                            Start Date:
                            <input
                                type="date"
                                value={startDate}
                                onChange={handleStartDateChange}
                                className="w-full px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"

                            />
                        </label>
                        <br />
                        <label>
                            Quantity of Days:
                            <input
                                type="number"
                                value={quantity}
                                onChange={handleQuantityChange}
                                className="w-full mb-2 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"

                            />
                        </label>
                        <br />
                        <button className=' w-full text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'
                            onClick={handleCalculate}>Calculate End Date</button>

                        <p className="mt-2 text-xl text-black font-bold">End Date is: <span className=" text-white 0 font-bold">{endDate !== null ? `${endDate}` : ""}</span></p>

                    </div>
                </div>
            </div>

        </>
    );
};

export default DatePredic;
