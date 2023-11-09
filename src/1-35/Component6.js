import React, { Component } from 'react';

class Component6 extends Component {
  constructor() {
    super();
    this.state = {
      x: '',
      sum: 0,
    };
  }

  handleInputChange = (event) => {
    this.setState({ x: event.target.value });
  };

  calculateSum = () => {
    const x = parseInt(this.state.x);
    if (x < 0) {
      return;
    }

    const xStr = x.toString();
    let sum = 0;

    for (let i = 0; i < xStr.length; i++) {
      const digit = parseInt(xStr[i]);
      sum += digit;
    }

    this.setState({ sum });
  };

  render() {
    return (
      <div>
        <h1>หาผลรวมของตัวเลขแต่ละหน่วย</h1>
        <div>
          <label>ป้อนค่า x: </label>
          <input
            type="number"
            value={this.state.x}
            onChange={this.handleInputChange}
          />
          <button onClick={this.calculateSum}>คำนวณผลรวม</button>
        </div>
        <div>
          ผลรวมของตัวเลข: {this.state.sum}
        </div>
      </div>
    );
  }
}

export default Component6;
