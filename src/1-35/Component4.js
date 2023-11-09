import React, { Component } from 'react';

class Component3 extends Component {
  constructor() {
    super();
    this.state = {
      v: '',
      w: '',
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
    const { v, w, x, y, z } = this.state;
    const max = Math.max(
      parseInt(v),
      parseInt(w),
      parseInt(x),
      parseInt(y),
      parseInt(z)
    );
    this.setState({ max });
  };

  render() {
    return (
      <div>
        <h1>หาค่ามากสุด</h1>
        <div>
          <label>v: </label>
          <input
            type="number"
            name="v"
            value={this.state.v}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>w: </label>
          <input
            type="number"
            name="w"
            value={this.state.w}
            onChange={this.handleInputChange}
          />
        </div>
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
