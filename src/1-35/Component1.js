import React, { Component } from 'react';

class Component1 extends Component {
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
    const x = parseFloat(this.state.x);
    const sum = (3 * Math.pow(x, 4)) + (2 * Math.pow(x, 3)) - x + 10;
    this.setState({ sum });
  };

  render() {
    return (
      <div>
        <h1>คำนวณสมการ</h1>
        <div>
          <label>ป้อนค่า x: </label>
          <input
            type="text"
            value={this.state.x}
            onChange={this.handleInputChange}
          />
          <button onClick={this.calculateSum}>คำนวณ</button>
        </div>
        <div>The sum is: {this.state.sum.toFixed(0)}</div>
      </div>
    );
  }
}

export default Component1;
