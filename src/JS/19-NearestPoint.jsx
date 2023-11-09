import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import NavBar from "../element/navBar";

const NearestPoint = () => {
  const [n, setN] = useState(null);
  const [points, setPoints] = useState([]);
  const [closestPairIndex1, setClosestPairIndex1] = useState(null);
  const [closestPairIndex2, setClosestPairIndex2] = useState(null);
  const [minDistance, setMinDistance] = useState(null);
  const [plotData, setPlotData] = useState([]);

  const handleInputChange = (index, e) => {
    const newPoints = [...points];
    newPoints[index] = e.target.value;
    setPoints(newPoints);
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  };

  const findClosestPair = () => {
    if (n <= 1) {
      alert('Please provide at least 2 points for calculation.');
      return;
    }
    let minDist = -1;
    let index1, index2;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const [x1, y1] = points[i].split(' ').map(coord => parseFloat(coord));
        const [x2, y2] = points[j].split(' ').map(coord => parseFloat(coord));
        const distance = calculateDistance(x1, y1, x2, y2);
        if (minDist === -1 || distance < minDist) {
          minDist = distance;
          index1 = i;
          index2 = j;
        }
      }
    }
    setMinDistance(minDist);
    setClosestPairIndex1(index1);
    setClosestPairIndex2(index2);

    const newPlotData = points.map((point, index) => {
      const [x, y] = point.split(' ').map(coord => parseFloat(coord));
      return {
        x: [x],
        y: [y],
        mode: 'markers',
        type: 'scatter',
        name: `Point ${index + 1}`,
        marker: { size: 35 } // Adjust the size as needed
      };
    });

    setPlotData(newPlotData);
  };

  const handleNChange = (e) => {
    const value = parseInt(e.target.value);
    setN(value);
    setPoints(Array(value).fill(''));
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-rose-200 flex items-center justify-center">
        <div className="my-20 w-3/4 bg-gradient-to-r from-rose-700 to-pink-600 rounded-lg shadow-xl p-10 flex flex-col items-center">
          <div className="mb-8 text-center text-5xl font-extrabold text-white">NearestPoint</div>

          <input
            placeholder="Enter the number of points"
            type="number"
            onChange={handleNChange}
            value={n || ''}
            className=" mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"

          />

          <div className="flex  ">
            {Array.from({ length: n || 0 }).map((_, index) => (
              <div key={index} className="m-3 w-auto">
                <input
                  className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"

                  placeholder={`Point ${index + 1}`}
                  type="text"
                  value={points[index] || ''}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </div>
            ))}
          </div>

          <button
            className='mt-3 w-4/12 text-white bg-orange-900 hover:bg-orange-800  font-medium rounded-lg text-sm px-5 py-2.5'
            onClick={findClosestPair}>Calculate</button>
          
          
          {closestPairIndex1 !== null && (
            <p className='my-3 text-xl text-white'>
              Closest points: {closestPairIndex1 + 1}, {closestPairIndex2 + 1}, Distance: {minDistance.toFixed(2)}
            </p>
          )}

          {plotData.length > 0 && (
            <Plot
              data={plotData}
              layout={{ width: 800, height: 800, title: 'Coordinates' ,size: 10}}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default NearestPoint;
