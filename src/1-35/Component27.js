import React, { Component } from 'react';

class Component27 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      result: null,
    };
  }

  countInversePairs = () => {
    const { arr } = this.state;
    const result = this.mergeSortAndCount([...arr], 0, arr.length - 1);
    this.setState({ result });
  };

  mergeSortAndCount = (arr, l, r) => {
    let count = 0;
    if (l < r) {
      const mid = l + Math.floor((r - l) / 2);

      count += this.mergeSortAndCount(arr, l, mid);
      count += this.mergeSortAndCount(arr, mid + 1, r);
      count += this.mergeAndCount(arr, l, mid, r);
    }
    return count;
  };

  mergeAndCount = (arr, l, mid, r) => {
    const temp = new Array(arr.length);
    let count = 0;

    let i = l;
    let j = mid + 1;
    let k = l;

    while (i <= mid && j <= r) {
      if (arr[i] > arr[j]) {
        count += mid - i + 1;
        temp[k++] = arr[j++];
      } else {
        temp[k++] = arr[i++];
      }
    }

    while (i <= mid) {
      temp[k++] = arr[i++];
    }

    while (j <= r) {
      temp[k++] = arr[j++];
    }

    for (let x = l; x <= r; x++) {
      arr[x] = temp[x];
    }

    return count;
  };

  handleInputChange = (event) => {
    const input = event.target.value;
    const arr = input
      .split(' ')
      .map((num) => parseInt(num))
      .filter((num) => !isNaN(num));

    this.setState({ arr });
  };

  render() {
    return (
      <div>
        <div>
          <div>
          <h1>[SInverse]</h1>
          </div>
          <label>Enter numbers separated by spaces:</label>
          <input
            type="text"
            onChange={this.handleInputChange}
          />
          <button onClick={this.countInversePairs}>Count Inverse Pairs</button>
          <p>Result: {this.state.result !== null ? this.state.result : ''}</p>
        </div>
      </div>
    );
  }
}

export default Component27;
