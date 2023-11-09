import React, { Component } from 'react';

class Component33 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputString: '',
      result: '',
    };
  }

  handleStringChange = (event) => {
    this.setState({ inputString: event.target.value });
  };

  generateExtraEnd = () => {
    const { inputString } = this.state;
    if (inputString.length >= 2) {
      const lastTwoChars = inputString.slice(-2);
      const result = lastTwoChars + lastTwoChars + lastTwoChars;
      this.setState({ result });
    } else {
      this.setState({ result: 'String length should be at least 2.' });
    }
  };

  render() {
    const { inputString, result } = this.state;

    return (
      <div>
        <h1>[ExtraEnd]</h1>
        <label>
          Input String:
          <input type="text" value={inputString} onChange={this.handleStringChange} />
        </label>
        <button onClick={this.generateExtraEnd}>Generate</button>
        <div>
          <h2>Generated String:</h2>
          <p>{result}</p>
        </div>
      </div>
    );
  }
}

export default Component33;
