import React, { Component } from 'react';

class CopyStr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputString: '',
      inputNumber: 0,
      result: '',
    };
  }

  handleStringChange = (e) => {
    this.setState({ inputString: e.target.value });
  };

  handleNumberChange = (e) => {
    this.setState({ inputNumber: parseInt(e.target.value) });
  };

  generateString = () => {
    const { inputString, inputNumber } = this.state;
    let generatedString = '';
    for (let i = 0; i < inputNumber; i++) {
      generatedString += inputString;
    }
    this.setState({ result: generatedString });
  };

  render() {
    const { inputString, inputNumber, result } = this.state;
    return (
      <div>
        <h1>[StringTimes]</h1>
        <label>
          Input String:
          <input type="text" value={inputString} onChange={this.handleStringChange} />
        </label>
        <label>
          Number of Copies:
          <input type="number" value={inputNumber} onChange={this.handleNumberChange} />
        </label>
        <button onClick={this.generateString}>Generate</button>
        <div>
          <h2>Generated String:</h2>
          <p>{result}</p>
        </div>
      </div>
    );
  }
}

export default CopyStr;
