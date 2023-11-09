import React, {  useState, useEffect } from 'react';

import NavBar from "../element/navBar";






function ClockCal() {
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();


  const handleHourChange = (e) => {
    setHour(e.target.value);
  };

  const handleMinuteChange = (e) => {
    setMinute(e.target.value);
  };

  const calculateTime = () => {
    let hourPosition = (hour % 12) * 5; // แปลงชั่วโมงเป็นตำแหน่ง
    let minutePosition = (minute / 60) * 5; // แปลงนาทีเป็นตำแหน่ง
    
    let number = hourPosition + Math.floor(minutePosition);
    if (number > 60) {
      
      number = number - 60;
    }
    
  
   return number;
   
    
  };

  return (
    <>
      <NavBar />

      <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
        <div className="relative w-[700px]">
          <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
            <div className="mb-8 text-center text-5xl font-extrabold text-white">Clock Calculator</div>

            <div className="container">
              <div className="clock-container flex items-center justify-center">
                <Clock
                  minuteRatio={minute / 60}
                  hourRatio={calculateTime() / 60} // แปลงตำแหน่งเป็นอัตราส่วน
                />
              </div>

              
                <div className='mt-3 flex items-center justify-center'>

                  <input type="number"
                    placeholder='Hour'
                    value={hour}
                    onChange={handleHourChange}
                    className="mx-2 w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"

                  />


                  <input type="number"
                    placeholder='Minute'
                    value={minute}
                    onChange={handleMinuteChange}
                    className="mx-2 w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"

                  />
                </div>

                <div>
                  <p className="mt-5 text-xl text-black font-bold">The short hand is pointing at the number: <span className=" text-white 0 font-bold">{calculateTime() !== null ? `${calculateTime()}` : ""}</span></p>
                  <p className="mt-5 text-xl text-black font-bold">The long hand is pointing at the number: <span className=" text-white 0 font-bold">{minute !== null ? `${minute}` : ""}</span></p>


                </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClockCal;
