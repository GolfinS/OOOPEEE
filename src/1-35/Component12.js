import React from 'react';

class Component12 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: '',
      tilesData: '',
      overlappingPairs: null,
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleTilesInput = () => {
    const { n, tilesData } = this.state;

    if (!n || !tilesData) {
      alert('กรุณาป้อนทั้งจำนวนแถวข้อมูล n และข้อมูล Tiles');
      return;
    }

    const nValue = parseInt(n, 10);
    const lines = tilesData.split('\n');

    if (isNaN(nValue) || nValue < 2 || nValue > lines.length) {
      alert('กรุณาป้อนจำนวนแถวข้อมูล n ที่ถูกต้อง');
      return;
    }

    const tiles = lines.slice(0, nValue).map((line) => {
      const parts = line.split(' ');
      if (parts.length !== 3) {
        alert('ข้อมูล Tiles ไม่ถูกต้อง');
        return null;
      }
      return parts.map(Number);
    });

    if (tiles.includes(null)) {
      return;
    }

    const overlappingPairs = this.countOverlappingPairs(tiles);
    this.setState({ overlappingPairs });
  }

  countOverlappingPairs = (tiles) => {
    const n = tiles.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dx = tiles[i][0] - tiles[j][0];
        const dy = tiles[i][1] - tiles[j][1];
        const distanceSq = dx * dx + dy * dy;
        const sumOfRadiiSq = (tiles[i][2] + tiles[j][2]) * (tiles[i][2] + tiles[j][2]);

        if (distanceSq < sumOfRadiiSq) {
          count++;
        }
      }
    }

    return count;
  }

  render() {
    const { n, tilesData, overlappingPairs } = this.state;

    return (
      <div>
        <h1>นับจำนวนกระเบื้องที่ทับซ้อนกัน</h1>
        <p>ป้อนจำนวนแถวข้อมูล n:</p>
        <input
          type="number"
          name="n"
          value={n}
          onChange={this.handleInputChange}
        />
        <p>ป้อนข้อมูล Tiles (คั่นด้วยเว้นวรรค):</p>
        <textarea
          name="tilesData"
          value={tilesData}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleTilesInput}>คำนวณ</button>
        {overlappingPairs !== null && (
          <p>จำนวนคู่ที่ทับซ้อนกัน: {overlappingPairs}</p>
        )}
      </div>
    );
  }
}

export default Component12;
