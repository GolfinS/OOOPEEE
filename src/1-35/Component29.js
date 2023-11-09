import React, { Component } from 'react';

class Component28 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      balance: 0,
      annualInterestRate: 0,
      dateCreated: '01/01/2022',
      transactions: [],
    };
  }

  get id() {
    return this.state.id;
  }

  set id(id) {
    this.setState({ id });
  }

  get balance() {
    return this.state.balance;
  }

  set balance(balance) {
    this.setState({ balance });
  }

  get annualInterestRate() {
    return this.state.annualInterestRate;
  }

  set annualInterestRate(annualInterestRate) {
    this.setState({ annualInterestRate });
  }

  get dateCreated() {
    return this.state.dateCreated;
  }

  getMonthlyInterest() {
    return (this.state.balance * this.state.annualInterestRate / 100) / 12;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.state.balance) {
      const newBalance = this.state.balance - amount;
      const transaction = {
        action: 'w',
        amount,
        date: 'Current Date',  // คุณอาจต้องใส่วันที่ที่คุณต้องการ
        newBalance,
      };
      this.setState({
        balance: newBalance,
        transactions: [...this.state.transactions, transaction],
      });
    }
  }

  deposit(amount) {
    if (amount > 0) {
      const newBalance = this.state.balance + amount;
      const transaction = {
        action: 'd',
        amount,
        date: 'Current Date',  // คุณอาจต้องใส่วันที่ที่คุณต้องการ
        newBalance,
      };
      this.setState({
        balance: newBalance,
        transactions: [...this.state.transactions, transaction],
      });
    }
  }

  render() {
    return (
      <div>
        <h1>[SBank]</h1>
        <label>
          Enter ID, Balance, Annual Interest Rate, and Date Created:
          <input
            type="text"
            value={`${this.state.id} ${this.state.balance} ${this.state.annualInterestRate} ${this.state.dateCreated}`}
            onChange={(e) => {
              const [id, balance, annualInterestRate, dateCreated] = e.target.value.split(' ');
              this.setState({ id, balance, annualInterestRate, dateCreated });
            }}
          />
        </label>
        <br />
        <label>
          Enter the number of transactions:
          <input type="number" />
        </label>
        <br />
        {/* Transaction inputs go here */}
        <button onClick={() => this.withdraw(1000)}>Withdraw 1000</button>
        <button onClick={() => this.deposit(500)}>Deposit 500</button>
        <h2>Results:</h2>
        <ul>
          {this.state.transactions.map((transaction, index) => (
            <li key={index}>
              {transaction.newBalance.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Component28;