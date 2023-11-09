import React, { useState } from 'react';
import NavBar from '../element/navBar';

const AngryBird = () => {
  const [bird, setBird] = useState(1);
  const [background, setBackground] = useState(1);

  const birds = [1, 2, 3, 4, 5]; 
  const backgrounds = [1, 2, 3, 4]; 

  const randomizeBirdAndBackground = () => {
    const randomBird = birds[Math.floor(Math.random() * birds.length)];
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    setBird(randomBird);
    setBackground(randomBackground);
    console.log(randomBird)
    console.log(randomBackground)
  };


  return (
    <><NavBar />
      <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
        <div className="relative w-[700px]">
          <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
            <div className="mb-8 text-center text-5xl font-extrabold text-white">Angry Birds</div>
            <div className="relative">

              <div className="relative">
                {background && (
                  <img
                    src={`img/30/background/${background}.png`}
                    alt="Background"
                    className="w-full"
                  />
                )}
                {bird && (
                  <img
                    src={`img/30/bird/${bird}.png`}
                    alt="Angry Bird"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px]"
                  />
                )}

                <button
                  onClick={randomizeBirdAndBackground}
                  className='mr-2 mt-2 w-full text-white bg-green-900 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5'
                >
                  Random Angry Bird & Background
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AngryBird;
