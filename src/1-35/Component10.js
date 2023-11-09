import React from 'react';

class Component10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      angle: null,
    };
  }

  handleInputChange = (e) => {
    this.setState({ time: e.target.value });
  }

  calculateClockAngle = () => {
    const { time } = this.state;
    const [hr, min] = time.split(':').map(parseFloat);

    if (isNaN(hr) || isNaN(min) || hr < 0 || hr > 23 || min < 0 || min > 59) {
      alert('กรุณาป้อนเวลาในรูปแบบที่ถูกต้อง (00:00 - 23:59)');
      return;
    }

    const hrAngle = (hr * 5.0) + (min / 12.0); // 1 ชั่วโมงมีมุม 30 องศา, 1 นาทีมีมุม 0.5 องศา
    this.setState({ angle: hrAngle });
  }

  render() {
    const { time, angle } = this.state;

    return (
      <div>
        <h1>คำนวณตำแหน่งเข็มสั้น</h1>
        <label>
          เวลา (รูปแบบ: 00:00 - 23:59):
          <input
            type="text"
            value={time}
            onChange={this.handleInputChange}
          />
        </label>
        <button onClick={this.calculateClockAngle}>คำนวณ</button>
        {angle !== null && <p>เข็มของเข็มนาฬิกาชี้ไปที่: {angle} นาที</p>}
      </div>
    );
  }
}

export default Component10;
