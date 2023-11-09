import React, { Component } from 'react';

class Component2 extends Component {
  constructor() {
    super();
    this.state = {
      x: '',
      y: 120, // อัตราค่าจ้างรายชั่วโมงเริ่มต้น
      s: 0, // เงินเดือนรวม
    };
  }

  handleInputChange = (event) => {
    this.setState({ x: event.target.value });
  };

  calculateSalary = () => {
    const x = parseInt(this.state.x);
    const y = this.state.y;
    let s = 0;

    if (x >= 0 && x <= 40) {
      s = x * y;
    } else if (x > 40) {
      const ot = x - 40;
      s = 40 * y + ot * 2 * y;
    }

    this.setState({ s });
  };

  render() {
    return (
      <div>
        <h1>คำนวณค่าแรง</h1>
        <div>
          <label>จำนวนชั่วโมงทำงาน: </label>
          <input
            type="number"
            value={this.state.x}
            onChange={this.handleInputChange}
          />
          <button onClick={this.calculateSalary}>คำนวณเงินเดือน</button>
        </div>
        <div>เงินเดือนรวม: {this.state.s}</div>
      </div>
    );
  }
}

export default Component2;
