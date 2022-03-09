import React, { Component } from "react";



class App extends Component {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <div className="container story-section1">
          <div className="row">
            <div className="col-lg-12">
              <div className="our-story-title">
                <span className="story-title-offset">Our</span><span className="story-title">Story</span>
                <span className="story-title-hr"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
