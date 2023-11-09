import React, { Component } from 'react';

class Component29 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      primeCounts: [],
    };
  }

  generatePrimes = (n) => {
    const primeFactorizer = new PrimeFactorizer();
    primeFactorizer.generatePrimes(n);

    const primes = primeFactorizer.getPrimes();
    const primeCounts = new Array(primes.length).fill(0);

    for (let num = 2; num <= n; num++) {
      const factors = primeFactorizer.factorize(num);
      for (const factor of factors) {
        primeCounts[primes.indexOf(factor)]++;
      }
    }

    this.setState({ primeCounts });
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ n: parseInt(value) });
  };

  

  render() {
    return (
      <div>
        <div>
          <div>
          <h1>[SFacPrime]</h1>
          </div>
          <label>Enter a number:</label>
          <input
            type="number"
            onChange={this.handleInputChange}
          />
          <button onClick={() => this.generatePrimes(this.state.n)}>Count Prime Factors</button>
          <p>Result: {this.state.primeCounts.join(' ')}</p>
        </div>
      </div>
    );
  }
}

class PrimeFactorizer {
  constructor() {
    this.primes = [2];
  }

  generatePrimes(n) {
    for (let num = 3; num <= n; num += 2) {
      let isPrime = true;
      for (const prime of this.primes) {
        if (prime * prime > num) {
          break;
        }
        if (num % prime === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        this.primes.push(num);
      }
    }
  }

  factorize(n) {
    const factors = [];
    let primeIndex = 0;

    while (n > 1 && primeIndex < this.primes.length) {
      const prime = this.primes[primeIndex];
      if (n % prime === 0) {
        factors.push(prime);
        n /= prime;
      } else {
        primeIndex++;
      }
    }

    return factors;
  }

  getPrimes() {
    return this.primes;
  }
}

export default Component29;
