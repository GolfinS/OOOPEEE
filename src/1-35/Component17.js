import React from 'react';

class Component17 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      m: '',
      n: '',
      paths: null,
    };
  }

  countPathsToTiger(m, n) {
    const paths = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    // กำหนดค่าเริ่มต้นที่บรรทัดแรกและคอลัมน์แรก
    for (let x = 1; x <= m; x++) {
      paths[x][1] = 1;
    }
    for (let y = 1; y <= n; y++) {
      paths[1][y] = 1;
    }

    // คำนวณจำนวนเส้นทางที่เจ้าหน้าที่ป่าไม้สามารถเดินไปถึงแต่ละเซลล์
    for (let x = 2; x <= m; x++) {
      for (let y = 2; y <= n; y++) {
        paths[x][y] = paths[x - 1][y] + paths[x][y - 1];
      }
    }

    // จำนวนเส้นทางที่เจ้าหน้าที่ป่าไม้สามารถเดินไปถึงเสือดาที่ (m, n)
    return paths[m][n];
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCalculatePaths = () => {
    const { m, n } = this.state;
    const parsedM = parseInt(m);
    const parsedN = parseInt(n);

    if (!isNaN(parsedM) && !isNaN(parsedN)) {
      const paths = this.countPathsToTiger(parsedM, parsedN);
      this.setState({ paths });
    } else {
      alert('กรุณาป้อนค่า m และ n ให้ถูกต้อง');
    }
  }

  render() {
    const { m, n, paths } = this.state;

    return (
      <div>
        <h1>[Blacktiger]</h1>
        <label>
          ความกว้างของพื้นที่ป่า (m):⠀
          <input
            type="text"
            name="m"
            value={m}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
         ⠀ความยาวของพื้นที่ป่า (n):⠀
          <input
            type="text"
            name="n"
            value={n}
            onChange={this.handleInputChange}
          />
        </label>
        <button onClick={this.handleCalculatePaths}>คำนวณ</button>
        {paths !== null && (
          <p>จำนวนเส้นทางทั้งหมดไปยังเสือดา: {paths}</p>
        )}
      </div>
    );
  }
}

export default Component17;
