import React from 'react';

class CompoundBoxChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: [],
      canBeAssembled: null,
    };
  }

  handleInputChange = (e, index) => {
    const { dimensions } = this.state;
    const value = e.target.value.split(' ').map(Number); // แปลงข้อมูลที่ป้อนเป็นตัวเลข
    dimensions[index] = value;
    this.setState({ dimensions });
  }

  checkAssembly = () => {
    const { dimensions } = this.state;

    if (dimensions.length !== 6) {
      alert('กรุณาป้อนข้อมูลทั้ง 6 ค่า');
      return;
    }

    const count = Array(10001).fill(0);

    // นับความถี่ของแต่ละด้าน
    dimensions.forEach(side => {
      count[side[0]]++;
    });

    let foundFourEqualSides = false;

    // ตรวจสอบว่ามี 4 ด้านที่เท่ากัน
    for (let i = 1; i <= 10000; i++) {
      if (count[i] >= 4) {
        foundFourEqualSides = true;
        count[i] -= 4;
        break;
      }
    }

    if (foundFourEqualSides) {
      console.log();
    }

    // ตรวจสอบว่ามี 2 ด้านที่เท่ากัน
    for (let i = 1; i <= 10000; i++) {
      if (count[i] >= 2) {
        this.setState({ canBeAssembled: '1' });
        return;
      }
    }

    this.setState({ canBeAssembled: '0' });
  }

  render() {
    const { canBeAssembled } = this.state;

    return (
      <div>
        <h1>[Compound Box]</h1>
        <p>ป้อนข้อมูล a และ b ของแผ่นไม้ทั้ง 6 แผ่น:</p>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`a และ b ของแผ่นที่ ${index}`}
              onChange={(e) => this.handleInputChange(e, index - 1)}
            />
          </div>
        ))}
        <button onClick={this.checkAssembly}>ตรวจสอบ</button>
        {canBeAssembled !== null && (
          <p>ผล: {canBeAssembled === '1' ? 'Y' : 'N'}</p>
        )}
      </div>
    );
  }
}

export default CompoundBoxChecker;
