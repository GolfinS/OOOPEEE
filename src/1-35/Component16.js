import React from 'react';

class Component16 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      numbers: [],
      average: null,
      max: null,
      min: null,
      sd: null,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleNumbersInput = () => {
    const { n, numbers } = this.state;
    const parsedNumbers = numbers.split(' ').map(Number);
    
    // คำนวณค่าเฉลี่ย, ค่ามากสุด, ค่าน้อยสุด, และค่า SD
    const sum = parsedNumbers.reduce((acc, num) => acc + num, 0);
    const average = sum / n;
    const squaredDifferences = parsedNumbers.map(num => (num - average) ** 2);
    const sd = Math.sqrt(squaredDifferences.reduce((acc, val) => acc + val, 0) / (n - 1));

    this.setState({ average, sd });
  }

  render() {
    const { n, numbers, sd } = this.state;

    return (
      <div>
        <h1>[SD]</h1>
        <p>ป้อนจำนวนตัวเลข n:</p>
        <input
          type="number"
          name="n"
          value={n}
          onChange={this.handleInputChange}
        />
        <p>ป้อนตัวเลข {n} ตัว (คั่นด้วยช่องว่าง):</p>
        <input
          type="text"
          name="numbers"
          value={numbers}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleNumbersInput}>คำนวณ</button>
        {sd !== null && (
          <p>ค่า SD: {sd.toFixed(2)}</p>
        )}
      </div>
    );
  }
}

export default Component16;
