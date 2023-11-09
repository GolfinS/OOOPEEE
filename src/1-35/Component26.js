import React, { Component } from 'react';

class Component26 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [],
      result: null,
    };
  }

  has1makkwa4 = () => {
    const { numbers } = this.state;
    let count1 = 0;
    let count4 = 0;

    for (let num of numbers) {
      if (num === 1) {
        count1++;
      }
      if (num === 4) {
        count4++;
      }
    }

    if (count1 > count4) {
      this.setState({ result: true });
    } else {
      this.setState({ result: false });
    }
  };

  handleInputChange = (event) => {
    const input = event.target.value;
    const numbers = input
      .split(' ')
      .map((num) => parseInt(num))
      .filter((num) => !isNaN(num));

    this.setState({ numbers });
  };

  render() {
    return (
      <div>
        <div>
          <div>
          <h1>[S1More4]</h1>
          </div>
          <label>Enter numbers separated by spaces:</label>
          <input
            type="text"
            onChange={this.handleInputChange}
          />
          <button onClick={this.has1makkwa4}>Check</button>
          <p>Result: {this.state.result !== null ? (this.state.result ? 'True' : 'False') : ''}</p>
        </div>
      </div>
    );
  }
}

export default Component26;
