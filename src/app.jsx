import React, { Component } from "react";
import stickybits from "stickybits";

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    stickybits(".story-sticky-container");
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <div className="story-sticky-container" style={{ zIndex: "12" }}>
          <div className="story-sticky-inner">
            <div className="story-sticky-nav">
              <div className="story-sticky-links d-flex align-items-center">
                <a href="#customers" className="story-sticky-link">
                  Our Customers
                </a>
                <a href="#expertise" className="story-sticky-link">
                  Our Expertise
                </a>
                <a href="#investments" className="story-sticky-link">
                  Our Investments
                </a>
                <a href="#brand" className="story-sticky-link">
                  Our Brand
                </a>
                <a href="#people" className="story-sticky-link">
                  Our People
                </a>
              </div>
              <div className="story-sticky-menu d-flex align-items-center">
                <a
                  href="https://www2.arccorp.com/about-us/contact-us/"
                  className="story-sticky-link-right"
                >
                  Contact Us <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="story-section1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="our-story-title">
                  <span className="story-title-offset">Our</span>
                  <span className="story-title">Story</span>
                  <span className="story-title-hr"></span>
                </div>
                <div className="story-title-text">
                  <span className="story-text-span">
                    ARC accelerates growth for the travel industry and beyond by
                    delivering forward-looking travel data, flexible
                    distribution services and innovative financial solutions.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="story-section2">
          <div className="container story-section2-globe">
            <div className="row">
              <div className="col-lg-12">
                <div className="story-section2-p1">
                  ARC possesses the world’s largest, most comprehensive
                  repository of global airline tickets:
                </div>
                <div className="story-section2-center">
                  <div className="story-section2-passenger">
                    <span className="story-section2-number">15</span>{" "}
                    <span className="story-section2-billion">Billion</span>{" "}
                    <span className="story-section2-text" style={{marginLeft: "-158px"}}>
                      Passenger Flights
                    </span>
                  </div>
                  <div className="story-section2-passenger">
                    <span className="story-section2-number">490</span>
                    <span className="story-section2-text" style={{marginLeft: "-182px"}}>Airlines</span>
                  </div>
                  <div className="story-section2-passenger">
                    <span className="story-section2-number">23</span>{" "}
                    <span className="story-section2-text" style={{marginLeft: "-149px"}}>
                      Countries & Territories
                    </span>
                  </div>
                </div>
                <div className="story-section2-p2">
                  We use our knowledge to connect stakeholders across the travel
                  ecosystem.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
