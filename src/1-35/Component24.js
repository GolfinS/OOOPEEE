import React, { Component } from 'react';

class Component24 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shape: 1, // 1: สี่เหลี่ยม, 2: สามเหลี่ยม, 3: วงกลม
      width: 0,
      length: 0,
      base: 0,
      height: 0,
      radius: 0,
      area: 0,
    };
  }

  calculateArea = () => {
    const { shape, width, length, base, height, radius } = this.state;
    let area = 0;

    switch (shape) {
      case 1: // สี่เหลี่ยม
        area = width * length;
        break;
      case 2: // สามเหลี่ยม
        area = (base * height) / 2;
        break;
      case 3: // วงกลม
        area = Math.PI * Math.pow(radius, 2);
        break;
      default:
        area = 0;
    }

    this.setState({ area: area.toFixed(2) });
  };

  handleInputChange = (event, name) => {
    const value = parseFloat(event.target.value);
    this.setState({ [name]: value });
  };

  handleSelectChange = (event) => {
    const value = parseInt(event.target.value);
    this.setState({ shape: value });
  };

  render() {
    const { shape, area } = this.state;

    return (
      <div>
        <div>
          <div>
            <div>
            <h1>[SBasicOOPWCon]</h1>
            </div>
            <label>Select Shape:</label>
            <select onChange={this.handleSelectChange}>
              <option value={1}>สี่เหลี่ยม</option>
              <option value={2}>สามเหลี่ยม</option>
              <option value={3}>วงกลม</option>
            </select>
            {shape === 1 && (
              <div>
                <label>ความกว้าง:</label>
                <input
                  type="number"
                  onChange={(event) => this.handleInputChange(event, 'width')}
                />
                <label>ความยาว:</label>
                <input
                  type="number"
                  onChange={(event) => this.handleInputChange(event, 'length')}
                />
              </div>
            )}
            {shape === 2 && (
              <div>
                <label>ฐาน:</label>
                <input
                  type="number"
                  onChange={(event) => this.handleInputChange(event, 'base')}
                />
                <label>ความสูง:</label>
                <input
                  type="number"
                  onChange={(event) => this.handleInputChange(event, 'height')}
                />
              </div>
            )}
            {shape === 3 && (
              <div>
                <label>รัศมี:</label>
                <input
                  type="number"
                  onChange={(event) => this.handleInputChange(event, 'radius')}
                />
              </div>
            )}
            <button onClick={this.calculateArea}>คำนวณพื้นที่</button>
            <p>พื้นที่: {area}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Component24;
