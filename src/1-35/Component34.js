import React, { Component } from 'react';

class Component34 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arraySize: '',
            result: false,
        };
    }

    checkFirstLast6 = () => {
        const { arraySize } = this.state;
        const Data = arraySize.split(' ').map(Number);
        if (Data.length >= 1) {
            const first = Data[0];
            const last = Data[Data.length - 1];
            if (first === 6 || last === 6) {
                this.setState({ result: true });
            } else {
            this.setState({ result: false });
            }
        }
    };

    resetValues = () => {
        this.setState({ arraySize: '', result: false });
    };

    render() {
        const { arraySize, result } = this.state;
        return (
            <div>
                <h1>[FirstLast]</h1>
                <label>
                    Enter numbers (comma-separated):
                    <input type="text" value={arraySize} onChange={(e) => this.setState({ arraySize: e.target.value })} />
                </label>
                <button onClick={this.checkFirstLast6}>Check</button>
                <button onClick={this.resetValues}>Reset</button>
                <p>Result: {result ? 'True' : 'False'}</p>
            </div>
        );
    }
}

export default Component34;
