import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Component19 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n: null,
      points: [],
      closestPairIndex1: null,
      closestPairIndex2: null,
      minDistance: null,
      plotData: [],
    };
  }

  handleInputChange = (index, e) => {
    const newPoints = [...this.state.points];
    newPoints[index] = e.target.value;
    this.setState({ points: newPoints });
  };

  calculateDistance = (x1, y1, x2, y2) => {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  };

  findClosestPair = () => {
    const { n, points } = this.state;
    if (n <= 1) {
      alert('Please provide at least 2 points for calculation.');
      return;
    }
    let minDist = -1;
    let index1, index2;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const [x1, y1] = points[i].split(' ').map(coord => parseFloat(coord));
        const [x2, y2] = points[j].split(' ').map(coord => parseFloat(coord));
        const distance = this.calculateDistance(x1, y1, x2, y2);
        if (minDist === -1 || distance < minDist) {
          minDist = distance;
          index1 = i;
          index2 = j;
        }
      }
    }
    this.setState({ minDistance: minDist });
    this.setState({ closestPairIndex1: index1 });
    this.setState({ closestPairIndex2: index2 });

    const newPlotData = points.map((point, index) => {
      const [x, y] = point.split(' ').map(coord => parseFloat(coord));
      return {
        x: [x],
        y: [y],
        mode: 'markers',
        type: 'scatter',
        name: `Point ${index + 1}`,
        marker: { size: 35 } // Adjust the size as needed
      };
    });

    this.setState({ plotData: newPlotData });
  };

  handleNChange = (e) => {
    const value = parseInt(e.target.value);
    this.setState({ n: value });
    this.setState({ points: Array(value).fill('') });
  };

  render() {
    const { n, points, closestPairIndex1, closestPairIndex2, minDistance, plotData } = this.state;

    return (
      <div>
        <h1>[Nearest Point]</h1>
        <input
          placeholder="Enter the number of points"
          type="number"
          onChange={this.handleNChange}
          value={n || ''}
        />

        {Array.from({ length: n || 0 }).map((_, index) => (
          <div key={index}>
            <input
              placeholder={`Point ${index + 1}`}
              type="text"
              value={points[index] || ''}
              onChange={(e) => this.handleInputChange(index, e)}
            />
          </div>
        ))}

        <button onClick={this.findClosestPair}>Calculate</button>
        
        {closestPairIndex1 !== null && (
          <p>
            Closest points: {closestPairIndex1 + 1}, {closestPairIndex2 + 1}, Distance: {minDistance.toFixed(2)}
          </p>
        )}

        {plotData.length > 0 && (
          <Plot
            data={plotData}
            layout={{ width: 800, height: 800, title: 'Coordinates' }}
          />
        )}
      </div>
    );
  }
}

export default Component19;
