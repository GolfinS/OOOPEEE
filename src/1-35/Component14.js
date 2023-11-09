import React, { Component } from "react";

class Component14 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UpData: "",
      DownData: "",
      longestGap: null,
    };
  }

  findLongestGap = () => {
    const { UpData, DownData } = this.state;
    const UP = UpData.split(' ').map(Number);
    const DOWN = DownData.split(' ').map(Number);

    let combinedLane = [...UP, ...DOWN];
    combinedLane.sort((a, b) => b - a);

    let longestGap = 0;
    for (let i = 0; i < combinedLane.length - 1; i++) {
      let gap = combinedLane[i] - combinedLane[i + 1];
      if (gap > longestGap) {
        longestGap = gap;
      }
    }

    this.setState({ longestGap });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { UpData, DownData, longestGap } = this.state;

    return (
      <div>
        <h1>[Up lane and Down lane]</h1>
        <p>{longestGap}</p>
        <input
          placeholder="First lane"
          name="UpData"
          value={UpData}
          onChange={this.handleInputChange}
        ></input>
        <input
          placeholder="Second lane"
          name="DownData"
          value={DownData}
          onChange={this.handleInputChange}
        ></input>
        <button id="move" onClick={this.findLongestGap}>
          Calculate!
        </button>
      </div>
    );
  }
}

export default Component14;
