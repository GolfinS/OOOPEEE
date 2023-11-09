import React, { Component } from 'react';

class Component25 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [],
      result: null,
    };
  }

  hasSumOfTwoEqualsTo8 = () => {
    const { numbers } = this.state;
    let count2 = 0;

    for (let num of numbers) {
      if (num === 2) {
        count2++;
        if (count2 === 4) {
          this.setState({ result: true });
          return;
        }
      }
    }

    this.setState({ result: false });
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
          <h1>[SSum2to8]</h1>
          </div>
          <label>Enter numbers separated by spaces:</label>
          <input
            type="text"
            onChange={this.handleInputChange}
          />
          <button onClick={this.hasSumOfTwoEqualsTo8}>Check</button>
          <p>Result: {this.state.result !== null ? (this.state.result ? 'True' : 'False') : ''}</p>
        </div>
      </div>
    );
  }
}

export default Component25;
