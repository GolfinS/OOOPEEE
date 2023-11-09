import React, { Component } from 'react';

class Component32 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputString: '',
      inputNumber: 0,
      result: '',
    };
  }

  handleStringChange = (event) => {
    this.setState({ inputString: event.target.value });
  };

  handleNumberChange = (event) => {
    this.setState({ inputNumber: parseInt(event.target.value) });
  };

  generateFrontTimes = () => {
    const { inputString, inputNumber } = this.state;
    let front = inputString.slice(0, 3);
    let generatedString = '';
    for (let i = 0; i < inputNumber; i++) {
      generatedString += front;
    }
    this.setState({ result: generatedString });
  };

  render() {
    const { inputString, inputNumber, result } = this.state;

    return (
      <div>
        <h1>[FrontTimes]</h1>
        <label>
          Input String:
          <input type="text" value={inputString} onChange={this.handleStringChange} />
        </label>
        <label>
          Number of Copies:
          <input type="number" value={inputNumber} onChange={this.handleNumberChange} />
        </label>
        <button onClick={this.generateFrontTimes}>Generate</button>
        <div>
          <h2>Generated String:</h2>
          <p>{result}</p>
        </div>
      </div>
    );
  }
}

export default Component32;
