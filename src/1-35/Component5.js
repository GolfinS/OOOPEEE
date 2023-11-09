import React, { Component } from 'react';

class Component5 extends Component {
  constructor() {
    super();
    this.state = {
      x: '',
      reversed: 0,
    };
  }

  handleInputChange = (event) => {
    this.setState({ x: event.target.value });
  };

  calculateReversed = () => {
    const x = parseInt(this.state.x);
    const reversed = this.reverseNumber(x);
    this.setState({ reversed });
  };

  reverseNumber = (num) => {
    let reversed = 0;
    while (num !== 0) {
      reversed = reversed * 10 + (num % 10);
      num = Math.floor(num / 10);
    }
    return reversed;
  };

  render() {
    return (
      <div>
        <h1>ค่าย้อนกลับ</h1>
        <div>
          <label>ป้อนค่า x: </label>
          <input
            type="number"
            value={this.state.x}
            onChange={this.handleInputChange}
          />
          <button onClick={this.calculateReversed}>คำนวณ</button>
        </div>
        <div>
          ตัวเลขที่ถูกกลับด้าน: {this.state.reversed}
        </div>
      </div>
    );
  }
}

export default Component5;
