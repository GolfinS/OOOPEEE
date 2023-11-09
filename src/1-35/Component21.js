import React, { Component } from 'react';

class Component21 extends Component {
  constructor() {
    super();
    this.state = {
      rows: 4,
      cols: 4,
      matrix: Array(4)
        .fill(0)
        .map(() => Array(4).fill(0)),
      Result: null,
    };
  }

  handleRowsDecrement = () => {
    if (this.state.rows > 2) {
      this.setState((prevState) => ({
        rows: prevState.rows - 1,
        matrix: prevState.matrix.slice(0, -1),
      }));
    }
  };

  handleRowsIncrement = () => {
    this.setState((prevState) => ({
      rows: prevState.rows + 1,
      matrix: [...prevState.matrix, Array(this.state.cols).fill(0)],
    }));
  };

  handleColsDecrement = () => {
    if (this.state.cols > 2) {
      this.setState((prevState) => ({
        cols: prevState.cols - 1,
        matrix: prevState.matrix.map((row) => row.slice(0, -1)),
      }));
    }
  };

  handleColsIncrement = () => {
    this.setState((prevState) => ({
      cols: prevState.cols + 1,
      matrix: prevState.matrix.map((row) => [...row, 0]),
    }));
  };

  handleReset = () => {
    this.setState({
      rows: 4,
      cols: 4,
      matrix: Array(4)
        .fill(0)
        .map(() => Array(4).fill(0)),
      Result: null,
    });
  };

  handleInputChange = (e, i, j) => {
    const value = parseInt(e.target.value);
    this.setState((prevState) => {
      const newMatrix = prevState.matrix.map((row, rowIndex) =>
        row.map((col, colIndex) =>
          rowIndex === i && colIndex === j ? value : col
        )
      );
      return { matrix: newMatrix };
    });
  };

  findMobileLocation = () => {
    let max_people = -Infinity;
    let location = { row: -1, col: -1 };

    for (let i = 0; i < this.state.matrix.length - 1; i++) {
      for (let j = 0; j < this.state.matrix[0].length; j++) {
        if (
          Math.abs(this.state.matrix[i][j] - this.state.matrix[i + 1][j]) <=
          10
        ) {
          let sum = this.state.matrix[i][j] + this.state.matrix[i + 1][j];
          if (sum > max_people) {
            max_people = sum;
            location.row = i;
            location.col = j;
          }
        }
      }
    }
    this.setState({
      Result: `${location.row + 1} ${location.col + 1}`,
    });
  };

  render() {
    return (
      <div>
        <h1>[MobileSensor]</h1>
        <div>
          <div>
            <div>
            </div>

            <table>
              <tbody>
                {this.state.matrix.map((row, i) => (
                  <tr key={i}>
                    {row.map((col, j) => (
                      <td key={j}>
                        <input
                          type="number"
                          value={this.state.matrix[i][j]}
                          onChange={(e) => this.handleInputChange(e, i, j)}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <p className=" text-white">Rows</p>
              <button
                onClick={this.handleRowsIncrement}
              >
                +
              </button>
              <button
                onClick={this.handleRowsDecrement}
              >
                -
              </button>
              <p>Columns</p>
              <button
                onClick={this.handleColsIncrement}
              >
                +
              </button>
              <button
                onClick={this.handleColsDecrement}
              >
                -
              </button>
            </div>
            <button
              onClick={this.findMobileLocation}
            >
              Solve
            </button>
            <button
              onClick={this.handleReset}
            >
              Reset
            </button>
            <p>
              Result is:{" "}
              <span>
                {this.state.Result !== null ? `${this.state.Result}` : ""}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Component21;
