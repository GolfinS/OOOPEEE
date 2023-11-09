import React, { Component } from 'react';

class Component8 extends Component {
  constructor() {
    super();
    this.state = {
      x1: 0,
      y1: 0,
      m: 0,
      n: 0,
      x0: 0,
      y0: 0,
      result: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  checkCoordinates = () => {
    const { x1, y1, m, n, x0, y0 } = this.state;
    const x1Float = parseFloat(x1);
    const y1Float = parseFloat(y1);
    const mInt = parseInt(m);
    const nInt = parseInt(n);
    const x0Float = parseFloat(x0);
    const y0Float = parseFloat(y0);

    if (x1Float < -1000.0 || y1Float > 1000.0) {
      this.setState({ result: 'No' });
      return;
    }

    if (x0Float < x1Float || y0Float < y1Float || x0Float > mInt || y0Float > nInt) {
      this.setState({ result: 'No' });
    } else {
      this.setState({ result: 'Yes' });
    }
  };

  render() {
    return (
      <div>
        <h1>[Point in rectangle]</h1>
        <div>
          <label>ป้อน x1, y1 (start): </label>
          <input
            type="text"
            name="x1"
            value={this.state.x1}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="y1"
            value={this.state.y1}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>ป้อน m, n (long): </label>
          <input
            type="text"
            name="m"
            value={this.state.m}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="n"
            value={this.state.n}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>ป้อน x0, y0 (dot): </label>
          <input
            type="text"
            name="x0"
            value={this.state.x0}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="y0"
            value={this.state.y0}
            onChange={this.handleInputChange}
          />
        </div>
        <button onClick={this.checkCoordinates}>ตรวจสอบ</button>
        <div>
          ผลลัพธ์: {this.state.result}
        </div>
      </div>
    );
  }
}

export default Component8;
