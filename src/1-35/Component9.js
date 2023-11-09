import React from 'react';

class Component9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: '',
      x: '',
      x1: '',
      y1: '',
      result: null,
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCalculate = () => {
    const { n, x, x1, y1 } = this.state;
    const parsedN = parseInt(n);
    const parsedX = x.split(' ').map(Number);

    if (isNaN(parsedN) || parsedN < 1 || parsedN > 1000) {
      alert('กรุณาป้อนค่า n ที่ถูกต้อง (1-1000)');
      return;
    }

    if (parsedX.length !== parsedN) {
      alert('จำนวนตัวเลขในรายการ x ไม่ตรงกับ n');
      return;
    }

    if (parsedX.some(num => isNaN(num))) {
      alert('รายการ x ควรประกอบด้วยตัวเลขเท่านั้น');
      return;
    }

    const parsedX1 = parseInt(x1);
    const parsedY1 = parseInt(y1);

    if (isNaN(parsedX1) || isNaN(parsedY1) || parsedX1 < -1000 || parsedX1 > 1000 || parsedY1 < -1000 || parsedY1 > 1000) {
      alert('กรุณาป้อนค่า x1 และ y1 ที่ถูกต้อง (-1000 to 1000)');
      return;
    }

    let newX1 = parsedX1;
    let newY1 = parsedY1;

    for (let j = 0; j < parsedN; j++) {
      const y = parsedX[j] % 4;

      if (y === 1) {
        newY1++;
      } else if (y === 2) {
        newX1--;
      } else if (y === 3) {
        newX1++;
      } else if (y === 0) {
        newY1--;
      }
    }

    this.setState({ result: `${newX1} ${newY1}` });
  }

  render() {
    const { n, x, x1, y1, result } = this.state;

    return (
      <div>
        <h1>[Mod dance]</h1>
        <label>
          จำนวน n:
          <input
            type="text"
            name="n"
            value={n}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          รายการ x (คั่นด้วยช่องว่าง):
          <input
            type="text"
            name="x"
            value={x}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          ค่า x1:
          <input
            type="text"
            name="x1"
            value={x1}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          ค่า y1:
          <input
            type="text"
            name="y1"
            value={y1}
            onChange={this.handleInputChange}
          />
        </label>
        <button onClick={this.handleCalculate}>คำนวณ</button>
        {result && <p>ตำแหน่งใหม่: {result}</p>}
      </div>
    );
  }
}

export default Component9;
