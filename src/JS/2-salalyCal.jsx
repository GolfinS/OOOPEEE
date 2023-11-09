import React, { useState ,useEffect} from "react";
import NavBar from "../element/navBar";

const SalaryCalculator = () => {
    const [hoursWorked, setHoursWorked] = useState(0);
    const [salary, setSalary] = useState(0);
    const [ot, setOT] = useState(0);
    const [totalSalary, setTotalSalary] = useState(0);

    const STD_HOURS = 40;
    const STD_RATE = 120;
    const OT_RATE = 20;

  

    const inputHours = (e) => {
        const hours = parseInt(e.target.value);
        console.log(hours);
        setHoursWorked(hours);
    };
    
    const calculateSalary = () => {
        console.log(hoursWorked)
        if (!isNaN(hoursWorked) && hoursWorked >= 0) {
            let salary = 0;
            let ot = 0;
            if (hoursWorked <= STD_HOURS) {
                salary = hoursWorked * STD_RATE;
                ot = 0;
            } else {
                salary = STD_HOURS * STD_RATE;
                ot = (hoursWorked - STD_HOURS) * OT_RATE;
            }
            setSalary(salary);
            setOT(ot);
            setTotalSalary(salary + ot);
        } else {
            alert("Please enter a valid number of hours worked.");
        }
    };

    return (
        <>
            <NavBar />
                 {/* <div className="min-h-screen  bg-[url('/img/moon.jpg')] bg-cover bg-fixed flex items-center justify-center"> */}

        <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
                <div className="relative w-[500px]">
                <div className="relative px-14 pb-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
                        <div className="mb-8 text-center text-[48px] font-extrabold text-white">Salary Calculator</div>
                        <p className="text-xl font-bold mt-5 text-white">Enter the value of hour Work:</p>
                        <input
                            type="number"
                            value={hoursWorked}
                            onChange={inputHours}
                            className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />

                        <button 
                            className='mt-2 w-full text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'
                            onClick={calculateSalary}>Calculate</button>
                        
                        <p className='text-xl font-bold mt-5 text-black'>SALARY is <span className='text-white font-bold'>{salary}</span> Baht</p>
                        <p className='text-xl font-bold mt-5 text-black'>OT is: <span className='text-white font-bold'>{ot} </span> Baht</p>
                        <p className='text-xl font-bold mt-5 text-black'>Total salary is: <span className='text-white font-bold'>{totalSalary}</span> Baht</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SalaryCalculator;









