import React, { Component } from 'react';

class Component18 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bit: 0,
            paths: [],
        };
    }

    B2Con(value, bit) {
        const star = new Array(bit).fill('0');
        for (let i = 0; i < bit; ++i) {
            const result = Math.pow(2, (bit - 1 - i));
            star[i] = result <= value ? '1' : '0';
            if (result <= value) {
                value -= result;
            }
        }
        return star;
    }

    generatePaths(bit) {
        const paths = [];
        for (let num = 0; num < Math.pow(2, bit); num++) {
            const StA = new Array(bit).fill('0');
            const StB = new Array(bit).fill('0');

            StA.splice(0, bit, ...this.B2Con(num, bit));

            StB.splice(0, bit, ...StA);

            let BitPos = 0;

            while (BitPos < bit) {
                if (StA[BitPos] !== '1' && StB[BitPos] === '0') {
                    StB[BitPos] = '1';
                    paths.push({ A: StA.join(''), B: StB.join('') });
                    StB.splice(0, bit, ...StA);

                    BitPos++;
                } else {
                    BitPos++;
                }
            }
        }
        return paths;
    }

    handleBitChange = (e) => {
        const bit = parseInt(e.target.value);
        const paths = this.generatePaths(bit);
        this.setState({ bit, paths });
    };

    render() {
        const { bit, paths } = this.state;

        return (
            <div>
                <h1>[Space Station Paths]</h1>
                <label>
                    Enter the number of bits: 
                    <input
                        type="number"
                        value={bit}
                        onChange={this.handleBitChange}
                    />
                </label>
                {paths.length > 0 && (
                    <div>
                        <h2>Paths:</h2>
                        <ul>
                            {paths.map((path, index) => (
                                <li key={index}>{path.A} {path.B}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default Component18;
