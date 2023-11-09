import React, { Component } from 'react';
import './Component.css'

class Component30 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bird: 1,
      background: 1,
    };

    this.angryBirds = [
      { bird: 1, background: 1 },
      { bird: 2, background: 2 },
      { bird: 3, background: 3 },
      { bird: 4, background: 4 },
      { bird: 5, background: 5 },  // ใช้ background อื่นในตัวอย่าง
    ];

    this.angryBirdIndex = 0;
  }

  randomizeBirdAndBackground = () => {
    // สุ่มคู่รูป Angry Bird และภูมิหลัง
    const nextBirdIndex = (this.angryBirdIndex + 1) % this.angryBirds.length;
    const nextPair = this.angryBirds[nextBirdIndex];

    this.setState({
      bird: nextPair.bird,
      background: nextPair.background,
    });

    this.angryBirdIndex = nextBirdIndex;
  };

  render() {
    const { bird, background } = this.state;

    return (
      <div>
        <div>
          <div>
            <h1>[Angry Birds]</h1>
          </div>
          <div>
            <div>
              {bird && (
                  <img
                    src={`img/bird/${bird}.png`}
                    alt="Angry Bird"
                    className = "bird-image"
                  />
                )}
              {background && (
                <img
                  src={`img/background/${background}.png`}
                  alt="Background"
                  className = "background-image"
                />
              )}
              <button onClick={this.randomizeBirdAndBackground}>
                Random Angry Bird & Background
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Component30;
