import React, { Component, Suspense, lazy } from 'react';
import './App.css';

class OOP35 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: null,
    };
  }

  setActiveComponent = (componentNumber) => {
    this.setState({ activeComponent: componentNumber });
  };

  render() {
    const { activeComponent } = this.state;
    const totalComponents = 35;

    // Create an array of component lazy imports
    const componentImports = [...Array(totalComponents).keys()].map((index) =>
      lazy(() => import(`./1-35/Component${index + 1}`))
    );

    return (
      <div className="container">
        <div className="buttons-container">
          {[...Array(totalComponents).keys()].map((componentNumber) => (
            <button
              className={`button ${activeComponent === componentNumber + 1 ? 'active' : ''}`}
              key={componentNumber}
              onClick={() => this.setActiveComponent(componentNumber + 1)}
            >
              Component {componentNumber + 1}
            </button>
          ))}
        </div>
        {activeComponent !== null && (
          <div className="component-view">
            <Suspense fallback={<div>Loading...</div>}>
              {activeComponent <= totalComponents && (
                <div>
                  {componentImports[activeComponent - 1] !== null &&
                    React.createElement(componentImports[activeComponent - 1])}
                </div>
              )}
            </Suspense>
          </div>
        )}
      </div>
    );
  }
}

export default OOP35;
