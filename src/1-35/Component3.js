import React, { Component } from 'react';

class Component3 extends Component {
  constructor() {
    super();
    this.state = {
      x: '',
      y: '',
      z: '',
      max: 0,
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  calculateMax = () => {
    const { x, y, z } = this.state;
    const max = Math.max(parseInt(x), parseInt(y), parseInt(z));
    this.setState({ max });
  };

  render() {
    return (
      <div>
        <h1>หาค่ามากสุด</h1>
        <div>
          <label>x: </label>
          <input
            type="number"
            name="x"
            value={this.state.x}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>y: </label>
          <input
            type="number"
            name="y"
            value={this.state.y}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>z: </label>
          <input
            type="number"
            name="z"
            value={this.state.z}
            onChange={this.handleInputChange}
          />
        </div>
        <button onClick={this.calculateMax}>คำนวณค่าสูงสุด</button>
        <div>ค่าสูงสุด: {this.state.max}</div>
      </div>
    );
  }
}

export default Component3;
