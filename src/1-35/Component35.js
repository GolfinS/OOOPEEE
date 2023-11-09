import React, { Component } from 'react';

class SameFirstLast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arraySize: '',
            result: '',
        };
    }

    checkSameFirstLast = () => {
        const { arraySize } = this.state;
        const Data = arraySize.split(' ').map(Number);
        if (Data.length >= 1) {
            const first = Data[0];
            const last = Data[Data.length - 1];
            this.setState({ result: first === last ? 'True' : 'False' });
        } else {
            this.setState({ result: '' });
        }
    };

    resetValues = () => {
        this.setState({ arraySize: '', result: '' });
    };

    render() {
        return (
            <div>
                <h1>[SameFirstLast]</h1>
                <label>
                    Enter numbers (comma-separated):
                    <input
                        type="text"
                        value={this.state.arraySize}
                        onChange={(e) => this.setState({ arraySize: e.target.value })}
                    />
                </label>
                <button onClick={this.checkSameFirstLast}>Check</button>
                <button onClick={this.resetValues}>Reset</button>
                <p>Result: {this.state.result}</p>
            </div>
        );
    }
}

export default SameFirstLast;
