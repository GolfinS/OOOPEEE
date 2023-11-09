import React, { Component } from 'react';

class Component21 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 4, // ค่าเริ่มต้นเป็น 4x4
      matrix: Array(4)
        .fill(0)
        .map(() => Array(4).fill(0)),
      result: '',
      consecutiveCells: [],
    };
  }

  hasFourConsecutive(n, arr) {
    let consecutiveCells = [];

    // Check horizontally
    for (let i = 0; i < n; i++) {
      for (let j = 0; j <= n - 4; j++) {
        if (
          arr[i][j] === arr[i][j + 1] &&
          arr[i][j] === arr[i][j + 2] &&
          arr[i][j] === arr[i][j + 3]
        ) {
          consecutiveCells.push([i, j], [i, j + 1], [i, j + 2], [i, j + 3]);
        }
      }
    }

    // Check vertically
    for (let i = 0; i <= n - 4; i++) {
      for (let j = 0; j < n; j++) {
        if (
          arr[i][j] === arr[i + 1][j] &&
          arr[i][j] === arr[i + 2][j] &&
          arr[i][j] === arr[i + 3][j]
        ) {
          consecutiveCells.push([i, j], [i + 1, j], [i + 2, j], [i + 3, j]);
        }
      }
    }

    // Check diagonally (top-left to bottom-right)
    for (let i = 0; i <= n - 4; i++) {
      for (let j = 0; j <= n - 4; j++) {
        if (
          arr[i][j] === arr[i + 1][j + 1] &&
          arr[i][j] === arr[i + 2][j + 2] &&
          arr[i][j] === arr[i + 3][j + 3]
        ) {
          consecutiveCells.push([i, j], [i + 1, j + 1], [i + 2, j + 2], [i + 3, j + 3]);
        }
      }
    }

    // Check diagonally (bottom-left to top-right)
    for (let i = 3; i < n; i++) {
      for (let j = 0; j <= n - 4; j++) {
        if (
          arr[i][j] === arr[i - 1][j + 1] &&
          arr[i][j] === arr[i - 2][j + 2] &&
          arr[i][j] === arr[i - 3][j + 3]
        ) {
          consecutiveCells.push([i, j], [i - 1, j + 1], [i - 2, j + 2], [i - 3, j + 3]);
        }
      }
    }

    return consecutiveCells;
  }

  handleMatrixInputChange = (event, i, j) => {
    const value = event.target.value;
    const updatedMatrix = [...this.state.matrix];
    updatedMatrix[i][j] = parseInt(value);
    this.setState({ matrix: updatedMatrix });
  }

  handleRowsIncrement = () => {
    const n = this.state.n + 1;
    const matrix = Array(n).fill(0).map(() => Array(n).fill(0));
    this.setState({
      n,
      matrix,
      result: '',
      consecutiveCells: [],
    });
  }

  handleRowsDecrement = () => {
    if (this.state.n > 2) {
      const n = this.state.n - 1;
      const matrix = Array(n).fill(0).map(() => Array(n).fill(0));
      this.setState({
        n,
        matrix,
        result: '',
        consecutiveCells: [],
      });
    }
  }

  handleSubmit = () => {
    const { n, matrix } = this.state;
  
    // Check if the matrix is empty
    if (matrix.length === 0 || matrix[0].length === 0) {
      this.setState({
        consecutiveCells: [],
        result: 'Matrix is empty',
      });
      return;
    }
  
    const consecutiveCellsResult = this.hasFourConsecutive(n, matrix);
    const hasResult = consecutiveCellsResult.length > 0;
    this.setState({
      consecutiveCells: consecutiveCellsResult,
      result: hasResult ? 'TRUE' : 'FALSE',
    });
  }

  resetMatrix = () => {
    const { n } = this.state;
    const resetMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    this.setState({
      matrix: resetMatrix,
      result: '',
      consecutiveCells: [],
    });
  }

  render() {
    return (
      <div>
        <h1>[ArrayChecke]</h1>
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
                          onChange={(e) => this.handleMatrixInputChange(e, i, j)}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <p className=" text-white">IncressOrDecress</p>
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
            </div>
            <button
              onClick={this.handleSubmit}
            >
              Solve
            </button>
            <button
              onClick={this.resetMatrix}
            >
              Reset
            </button>
            <p>
              Result is:{" "}
              <span>
                {this.state.result !== '' ? this.state.result : ""}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Component21;
