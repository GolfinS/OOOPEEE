import React, { useState, useRef, useEffect } from 'react';
import NavBar from "../element/navBar";

const TileCal = () => {
    const [n, setN] = useState(2);
const [tiles, setTiles] = useState([Array(3).fill(0), Array(3).fill(0)]);
    const [output, setOutput] = useState("");
    const canvasRef = useRef(null);

    const handleTileChange = (index, position, event) => {
        const value = parseInt(event.target.value);
        const newTiles = [...tiles];
        newTiles[index][position] = value;
        setTiles(newTiles);
    };

    const handleTileCountIncrease = () => {
        setN(n + 1);
        setTiles([...tiles, Array(3).fill(0)]);
    };

    const handleTileCountDecrease = () => {
        if (n > 2) {
            setN(n - 1);
            setTiles(tiles.slice(0, -1));
        }
    };

    const handleReset = () => {
        window.location.reload();
    };


    const countOverlappingTiles = (N, tiles) => {

        let count = 0;
        for (let i = 0; i < N; i++) {
            let xi = tiles[i][0];
            let yi = tiles[i][1];
            let ri = tiles[i][2];

            for (let j = i + 1; j < N; j++) {
                let xj = tiles[j][0];
                let yj = tiles[j][1];
                let rj = tiles[j][2];

                let dx = xi - xj;
                let dy = yi - yj;
                let distanceSquared = dx * dx + dy * dy;

                if (distanceSquared <= (ri + rj) * (ri + rj)) {
                    count++;
                }
            }
        }

        return count;
    };

    const handleSubmit = () => {
        const overlappingCount = countOverlappingTiles(n, tiles);
        setOutput(overlappingCount.toString());
        drawTiles();
    };

   

    return (
        <>
            <NavBar />

            <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
                <div className="relative w-[700px]">
                    <div className="my-12 relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
                        <div className="mb-8 text-center text-5xl font-extrabold text-white">Tile Calculator</div>



                        {tiles.map((tile, index) => (
                            <div key={index} className='flex justify-between'>

                                <input
                                    className="w-[150px] mr-3 mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    placeholder={`x${index + 1}`}
                                    type="number"
                                    id={`x${index}`}
                                    name={`x${index}`}
                                    onChange={(e) => handleTileChange(index, 0, e)}
                                />

                                <input
                                    className="w-[150px] mr-3 mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    placeholder={`y${index + 1}`}
                                    type="number"
                                    id={`y${index}`}
                                    name={`y${index}`}
                                    onChange={(e) => handleTileChange(index, 1, e)}
                                />

                                <input
                                    className="w-[150px]  mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    placeholder={`r${index + 1}`}
                                    type="number"
                                    id={`r${index}`}
                                    name={`r${index}`}
                                    onChange={(e) => handleTileChange(index, 2, e)}
                                />
                            </div>
                        ))}

                        <div className='flex justify-between'>
                            <button
                                className=' w-[50px] mt-2 px-3 py-2 text-white bg-green-500 hover:bg-green-900 rounded-md'
                                onClick={handleTileCountIncrease}>+
                            </button>
                            <button className='w-[150px] mt-2 px-3 py-2 text-white bg-blue-500 hover:bg-blue-900 rounded-md' onClick={handleSubmit}>คำนวณ</button>
                            
                            <button
                                className='w-[50px] mt-2 px-3 py-2 text-white bg-red-500 hover:bg-red-900 rounded-md'
                                onClick={handleTileCountDecrease}>-
                            </button>

                        </div>
                        <p className="mt-5 text-xl text-black font-bold">Result is: <span className=" text-white 0 font-bold">{n !== 0 ? `${output}` : ""}</span></p>



                        <div className='flex justify-center items-center'>
                
                            
                        </div>
                        <div className= 'flex justify-center'>
                        <button
                                className=' w-[150px] mt-2 px-3 py-2 text-white bg-gray-500 hover:bg-gray-900 rounded-md'
                                onClick={handleReset}
                            >
                                Reset
                            </button>
                            </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default TileCal;