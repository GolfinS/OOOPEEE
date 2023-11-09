import React, { Component } from 'react';

class Component7 extends Component {
  constructor() {
    super();
    this.state = {
      day: 1,
      month: 1,
      year: 2023,
      add: '',
      startDate: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  calculateDate = () => {
    const { day, month, year, add, startDate } = this.state;
    let dayRef = parseInt(day);
    let monthRef = parseInt(month);
    let yearRef = parseInt(year);
    let addRef = parseInt(add);

    if (startDate) {
      const [startDay, startMonth, startYear] = startDate.split('/');
      dayRef = parseInt(startDay);
      monthRef = parseInt(startMonth);
      yearRef = parseInt(startYear);
    }

    while (addRef > 0) {
      const isLeapYear = yearRef % 4 === 0 && (yearRef % 100 !== 0 || yearRef % 400 === 0);
      const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      if (monthRef === 2 && isLeapYear) {
        if (dayRef === 29) {
          dayRef = 1;
          monthRef++;
        } else {
          dayRef++;
        }
      } else if (dayRef === daysInMonth[monthRef - 1]) {
        dayRef = 1;
        monthRef++;
      } else {
        dayRef++;
      }

      if (monthRef > 12) {
        monthRef = 1;
        yearRef++;
      }

      addRef--;
    }

    this.setState({ day: dayRef, month: monthRef, year: yearRef });
  };

  render() {
    return (
      <div>
        <h1>อีกกี่วัน เป็นวันที่เท่าไหร่</h1>
        <div>
          <label>วันที่เริ่มต้น (dd/mm/yyyy): </label>
          <input
            type="text"
            name="startDate"
            value={this.state.startDate}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label>จำนวนวันที่จะเพิ่ม: </label>
          <input
            type="number"
            name="add"
            value={this.state.add}
            onChange={this.handleInputChange}
          />
          <button onClick={this.calculateDate}>คำนวณวันที่</button>
        </div>
        <div>
          วันที่หลังจากการเพิ่ม: {this.state.day}/{this.state.month}/{this.state.year}
        </div>
      </div>
    );
  }
}

export default Component7;
