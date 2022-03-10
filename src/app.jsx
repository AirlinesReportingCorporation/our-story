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
                    <span
                      className="story-section2-text"
                      style={{ marginLeft: "-158px" }}
                    >
                      Passenger Flights
                    </span>
                  </div>
                  <div className="story-section2-passenger">
                    <span className="story-section2-number">490</span>
                    <span
                      className="story-section2-text"
                      style={{ marginLeft: "-182px" }}
                    >
                      Airlines
                    </span>
                  </div>
                  <div className="story-section2-passenger">
                    <span className="story-section2-number">23</span>{" "}
                    <span
                      className="story-section2-text"
                      style={{ marginLeft: "-149px" }}
                    >
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
        <div className="story-section3">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12"
                style={{
                  display: "inline-flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="story-section3-item">
                  <span className="story-section3-header">OUR VISION</span>
                  <p className="story-section3-text">
                    Enable the growth of global air travel to strengthen
                    economies and enrich lives.
                  </p>
                </div>
                <div className="story-section3-item">
                  <span className="story-section3-header">OUR MISSION</span>
                  <p className="story-section3-text">
                    Accelerate the growth of global air travel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="story-customers">
          <div className="container" id="customers">
            <div className="row">
              <div className="col-lg-12">
                <div className="story-customers-header story-header">
                  <span className="customer-empower">How We Empower</span>
                  <span className="story-preHeader">Our</span>{" "}
                  <span className="story-mainHeader">Customers</span>
                </div>
                <div className="story-about-customers d-flex">
                  <div className="story-customer-item col-6">
                    <div>
                      <img
                        src="https://www2.arccorp.com/globalassets/about-us/our-story/Agent.png"
                        alt=""
                        className="story-customer-icon"
                      />
                    </div>
                    <div className="story-customer-info">
                      <span className="customer-header">
                        Equipping Travel Agencies
                      </span>
                      <p className="customer-info">
                        We help agencies build strong industry relationships,
                        settle transactions with airlines and customers,
                        seamlessly manage travel for their clients, and grow
                        their businesses.
                      </p>
                      <a href="" className="customer-learn">
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="story-customer-item col-6">
                    <div>
                      <img
                        src="https://www2.arccorp.com/globalassets/about-us/our-story/PLANE.png"
                        alt=""
                        className="story-customer-icon"
                      />
                    </div>
                    <div className="story-customer-info">
                      <span className="customer-header">
                        Enabling Airline Success
                      </span>
                      <p className="customer-info">
                        Our data, distribution and financial solutions help
                        airlines settle transactions with travel agencies and
                        corporations, grow their businesses, and increase
                        profitability across all channels of distribution.
                      </p>
                      <a href="" className="customer-learn">
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="story-customer-item col-6">
                    <div>
                      <img
                        src="https://www2.arccorp.com/globalassets/about-us/our-story/CORPORATE.png"
                        alt=""
                        className="story-customer-icon"
                      />
                    </div>
                    <div className="story-customer-info">
                      <span className="customer-header">
                        Guiding Corporate Travel Programs
                      </span>
                      <p className="customer-info">
                        We provide solutions and analytics to help corporations
                        seamlessly engage with airlines across multiple channels
                        and strategically manage their travel programs.
                      </p>
                      <a href="" className="customer-learn">
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="story-customer-item col-6">
                    <div>
                      <img
                        src="https://www2.arccorp.com/globalassets/about-us/our-story/DATA.png"
                        alt=""
                        className="story-customer-icon"
                      />
                    </div>
                    <div className="story-customer-info">
                      <span className="customer-header">
                        Providing High-Quality Travel Data
                      </span>
                      <p className="customer-info">
                        ARC’s data reflects large-scale travel trends and the
                        smallest details, enabling companies to target audiences
                        and predict demand.
                      </p>
                      <a href="" className="customer-learn">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="story-expertise">
          <div className="container" id="expertise">
            <div className="row">
              <div className="col-lg-12"></div>
            </div>
          </div>
        </div>
        <div className="story-investments">
          <div className="container" id="investments">
            <div className="row">
              <div className="col-lg-12"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="story-brand">
            <div className="container" id="expertise">
              <div className="row">
                <div className="col-lg-12"></div>
              </div>
            </div>
          </div>
          <div className="story-people">
            <div className="container" id="expertise">
              <div className="row">
                <div className="col-lg-12"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="story-commitment">
          <div className="container" id="expertise">
            <div className="row">
              <div className="col-lg-12"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
