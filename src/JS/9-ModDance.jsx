import React, {  useState, useEffect } from 'react';

import Plot from 'react-plotly.js';
import NavBar from "../element/navBar";

const DanceProgram = ({ index }) => {
  const [n, setN] = useState();
  const [data, setData] = useState([]);
  const [start, setStart] = useState('');
  const [LastX, setLastX] = useState(0);
  const [LastY, setLastY] = useState(0);
  const [plotData, setPlotData] = useState([]);
  

  const handleRunDance = () => {
    
    console.log("1 " + start);
    console.log("2 " + start);
    const danceData = data.split(',').map(Number);
    console.log("0 " + data);
    let Startt = start.split(',').map(Number);
    let [tempX, tempY] = Startt;
    console.log("3 " + tempX);
    console.log("4 " + tempY);
    const plotDataArray = [];

    for (let i = 0; i <= n; i++) {

      setLastX(tempX);
      setLastY(tempY);
      
      plotDataArray.push({ x: tempX, y: tempY });
      if (danceData[i] % 4 === 1 && tempY <= 1000) {
        tempY++;
      } else if (danceData[i] % 4 === 2 && tempX >= -1000) {
        tempX--;
      } else if (danceData[i] % 4 === 3 && tempX <= 1000) {
        tempX++;
      } else if (danceData[i] % 4 === 0 && tempY >= -1000) {
        tempY--;
      }
    }

    setPlotData([
      {
        x: plotDataArray.map((point) => point.x),
        y: plotDataArray.map((point) => point.y),
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'red', size: 20 },
        name: `${start}`,
      },
    ]);
  };

 

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-rose-200 flex items-center justify-center">
        <div className="relative w-[1000px]">
          <div className=" my-10 relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
            <div className="mb-8 text-center text-5xl font-extrabold text-white">ModDance</div>


            <input
              placeholder='Enter the value of n'
              type="number"
              value={n}
              onChange={(e) => setN(parseInt(e.target.value))}
              className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"

            />

            <input
              placeholder=' Enter dance data (space-separated)'
              type="text"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              placeholder='Enter starting point (x, y)'
              type="text"
              value={start}
              onChange={(e) => { setStart(e.target.value) }}
              className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <button
              className='mt-2 w-full text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'
              onClick={handleRunDance}>Run Dance
            </button>
            <p className="my-2  text-xl text-black font-bold">Last Point: <span className=" text-white 0 font-bold">{n !== null ? `${LastX}, ${LastY}` : ""}</span></p>
            <div className='flex items-center justify-center' >
              <Plot
                data={plotData}
                layout={{
                  title: `ModDance Start From ${start}`,
                  showlegend: true,
                  xaxis: {
                    title: 'X-axis',
                    gridcolor: 'black', // Set the grid color for the x-axis here
                  },
                  yaxis: { 
                    title: 'Y-axis',
                    gridcolor: 'black', // Set the grid color for the x-axis here
                  },
                  width: 850,
                  height: 600,
                 
                  paper_bgcolor: 'WHITE', // Set the paper background color here
                }}
               
              />
               
                
            


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DanceProgram;







