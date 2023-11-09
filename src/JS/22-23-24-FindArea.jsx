import React, { useState } from 'react';
import NavBar from "../element/navBar";

const AreaCalculator = () => {
  const [shape, setShape] = useState('');
  const [dimensionA, setDimensionA] = useState(0);
  const [dimensionB, setDimensionB] = useState(0);
  const [result, setResult] = useState(null);
  const [Check, setCheck] = useState(false);
  
  const calculateArea = () => {
    let area;
    switch (shape) {
     
      case 'สี่เหลี่ยมผืนผ้า':
        area = dimensionA * dimensionB;
        break;
      case 'สามเหลี่ยม':
        area = 0.5 * dimensionA * dimensionB;
        break;
      case 'วงกลม':
        area = Math.PI * Math.pow(dimensionA, 2);
        break;
      
      default:
        area = null;
        
    }
    setResult(area);
    
  };

  const handleShapeChange = (e) => {
    setCheck(true);
    setShape(e.target.value);
    setDimensionA(0);
    setDimensionB(0);
    setResult(null);
  };

  return (
    <>
      <NavBar />
      <div className="min-h-92.5 bg-rose-200 flex items-center justify-center">
        <div className="relative w-[700px]">
          <div className="relative px-20 py-12 bg-gradient-to-r from-rose-700 to-pink-600 rounded-[10px] shadow-[-11px_14px_49px_13px_#26261BA8]">
            <div className="mb-8 text-center text-5xl font-extrabold text-white">เครื่องคำนวณพื้นที่</div>

            <label className="text-white">รูปทรง: </label>
            <select
              value={shape}
              onChange={handleShapeChange}
              className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">กรุณาเลือกรูปทรง</option>
              <option value="สี่เหลี่ยมผืนผ้า">สี่เหลี่ยมผืนผ้า</option>
              <option value="สามเหลี่ยม">สามเหลี่ยม</option>
              <option value="วงกลม">วงกลม</option>
            </select>
            <br />
            {shape && (
              <div>
                <input
                  placeholder="height"
                  className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  type="number"
                  value={dimensionA}
                  onChange={(e) => setDimensionA(e.target.value)}
                />
                <br />
                {shape !== 'วงกลม' && (
                  <div>
                    <input
                      placeholder="radius"
                      className="w-full mt-3 px-4 py-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      type="number"
                      value={dimensionB}
                      onChange={(e) => setDimensionB(e.target.value)}
                    />
                    <br />
                  </div>
                )}
                <button
                  className="mt-2 w-full text-white bg-orange-900 hover:bg-orange-800 font-medium rounded-lg text-sm px-5 py-2.5"
                  onClick={calculateArea}
                >
                  คำนวณพื้นที่
                </button>
              </div>
            )}
            <p className="mt-5 text-xl text-black font-bold">{Check !== true ? " " : `Area of ${shape}:`}<span className=" text-white 0 font-bold">{result !== null ? `${result}` : ""}</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AreaCalculator;
