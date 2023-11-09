import React from 'react';

class Component15 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      numbers: [],
      average: null,
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

    this.setState({ average });
  }

  render() {
    const { n, numbers, average } = this.state;

    return (
      <div>
        <h1>คำนวณค่าเฉลี่ย</h1>
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
        {average !== null && (
          <p>ค่าเฉลี่ย: {average.toFixed(2)}</p>
        )}
      </div>
    );
  }
}

export default Component15;
