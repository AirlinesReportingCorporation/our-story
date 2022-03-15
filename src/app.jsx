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
              </div>
            </div>

            <div className="story-section2-center">
              <div className="row">
                <div className="col-lg-4">
                  <div className="story-section2-passenger">
                    <div className="story-section2-data">
                      <div className="story-section2-number">15</div>{" "}
                      <div className="story-section2-billion">Billion</div>
                    </div>
                    <div className="story-section2-text">Passenger Flights</div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="story-section2-passenger">
                    <div className="story-section2-data">
                      <div className="story-section2-number">490</div>
                    </div>

                    <div className="story-section2-text">Airlines</div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="story-section2-passenger">
                    <div className="story-section2-data">
                      <div className="story-section2-number">230</div>
                    </div>
                    <div className="story-section2-text">
                      Countries & Territories
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
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
              <div className="col-lg-6">
                <div className="story-section3-item">
                  <div className="story-section3-header">OUR VISION</div>
                  <p className="story-section3-text">
                    Enable the growth of global air travel to strengthen
                    economies and enrich lives.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="story-section3-item">
                  <div className="story-section3-header">OUR MISSION</div>
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
                  <span className="story-preHeader" style={{ color: "black" }}>
                    Our
                  </span>{" "}
                  <span className="story-mainHeader" style={{ color: "black" }}>
                    Customers
                  </span>
                </div>
                <div className="story-about-customers d-flex">
                  <div className="story-customer-item col-lg-6">
                    <div>
                      <img
                        src="https://www2.arccorp.com/globalassets/about-us/our-story/Agent.png"
                        alt=""
                        className="story-customer-icon"
                      />
                    </div>
                    <div className="story-customer-info">
                      <div className="customer-header">
                        Equipping Travel Agencies
                      </div>
                      <p className="customer-info">
                        We help agencies build strong industry relationships,
                        settle transactions with airlines and customers,
                        seamlessly manage travel for their clients, and grow
                        their businesses.
                      </p>
                      <a
                        href="https://www2.arccorp.com/products-participation/travel-agencies/"
                        className="customer-learn"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="story-customer-item col-lg-6">
                    <div>
                      <img
                        src="https://www2.arccorp.com/globalassets/about-us/our-story/PLANE.png"
                        alt=""
                        className="story-customer-icon"
                      />
                    </div>
                    <div className="story-customer-info">
                      <div className="customer-header">
                        Enabling Airline Success
                      </div>
                      <p className="customer-info">
                        Our data, distribution and financial solutions help
                        airlines settle transactions with travel agencies and
                        corporations, grow their businesses, and increase
                        profitability across all channels of distribution.
                      </p>
                      <a
                        href="https://www2.arccorp.com/products-participation/airlines/"
                        className="customer-learn"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="story-customer-item col-lg-6">
                    <div>
                      <img
                        src="https://www2.arccorp.com/globalassets/about-us/our-story/CORPORATE.png"
                        alt=""
                        className="story-customer-icon"
                      />
                    </div>
                    <div className="story-customer-info">
                      <div className="customer-header">
                        Guiding Corporate Travel Programs
                      </div>
                      <p className="customer-info">
                        We provide solutions and analytics to help corporations
                        seamlessly engage with airlines across multiple channels
                        and strategically manage their travel programs.
                      </p>
                      <a
                        href="https://www2.arccorp.com/products-participation/corporations/"
                        className="customer-learn"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="story-customer-item col-lg-6">
                    <div>
                      <img
                        src="https://www2.arccorp.com/globalassets/about-us/our-story/DATA.png"
                        alt=""
                        className="story-customer-icon"
                      />
                    </div>
                    <div className="story-customer-info">
                      <div className="customer-header">
                        Providing High-Quality Travel Data
                      </div>
                      <p className="customer-info">
                        ARC’s data reflects large-scale travel trends and the
                        smallest details, enabling companies to target audiences
                        and predict demand.
                      </p>
                      <a
                        href="https://www2.arccorp.com/products-participation/other-data-users/"
                        className="customer-learn"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container story-expertise" id="expertise">
          <div className="row">
            <div className="col-lg-12">
              <img
                src="https://www2.arccorp.com/globalassets/about-us/our-story/slants.png"
                alt=""
                className="story-slants expertise-top-slants"
              />
              <div className="story-expertise-header story-header">
                <span className="story-preHeader">Our</span>{" "}
                <span className="story-mainHeader">Expertise</span>
              </div>
              <div className="expertise-info">
                <div className="expertise-data col-lg-3">
                  <span className="expertise-info-header">
                    Global Data & Analytics
                  </span>
                  <div className="expertise-item">
                    <p className="expertise-info-text">
                      See a sample of our data in action. <br></br>
                      <a
                        href="https://www2.arccorp.com/about-us/our-data/"
                        className="expertise-info-link"
                      >
                        Our Data at a glance
                      </a>
                    </p>
                  </div>
                  <div className="expertise-item">
                    <p className="expertise-info-text">
                      View a snapshot of the past month’s travel agency sales.{" "}
                      <br></br>
                      <a
                        href="https://www2.arccorp.com/articles-trends/sales-statistics/"
                        className="expertise-info-link"
                      >
                        Current sales statistics
                      </a>
                    </p>
                  </div>
                  {/* <div className="expertise-item">
                    <p className="expertise-info-text">
                      ARC data powers industry research and solutions provided
                      by many partners, including, ForwardKeys and Skytra.{" "}
                      <br></br>
                      <a href="" className="expertise-info-link">
                        Data as a service
                      </a>
                    </p>
                  </div> */}
                  {/* <div className="expertise-item">
                    <p className="expertise-info-text">
                      ARC offers flexible data solutions to fit your company’s
                      needs. <br></br>
                      <a href="" className="expertise-info-link">
                        Our Data Products
                      </a>
                    </p>
                  </div> */}
                </div>
                <div className="expertise-data col-lg-3">
                  <span className="expertise-info-header">
                    Distribution & Financial Services
                  </span>
                  <div className="expertise-item">
                    <p className="expertise-info-text">
                      Learn how we’re connecting the travel industry to create a
                      “buy anywhere, service anywhere” ecosystem. <br></br>
                      <a
                        href="https://www2.arccorp.com/about-us/arc-omnichannel-retailing/"
                        className="expertise-info-link"
                      >
                        Omnichannel Retailing
                      </a>
                    </p>
                  </div>
                  <div className="expertise-item">
                    <p className="expertise-info-text">
                      Partner with ARC to use NDC in your distribution strategy.{" "}
                      <br></br>
                      <a
                        href="https://www2.arccorp.com/products-participation/distribution/"
                        className="expertise-info-link"
                      >
                        ARC Direct Connect (NDC)
                      </a>
                    </p>
                  </div>
                  <div className="expertise-item">
                    <p className="expertise-info-text">
                      ARC enables U.S. travel agencies and global travel
                      suppliers to work together efficiently. <br></br>
                      <a
                        href="https://www2.arccorp.com/about-us/settlement-services/"
                        className="expertise-info-link"
                      >
                        Settlement
                      </a>
                    </p>
                  </div>
                  <div className="expertise-item">
                    <p className="expertise-info-text">
                      ARC provides payment-processing tools for travel agencies,
                      industry payment updates and more. <br></br>
                      <a
                        href="https://www2.arccorp.com/products-participation/products/arc-pay/"
                        className="expertise-info-link"
                      >
                        Payment Processing
                      </a>
                    </p>
                  </div>
                </div>
                <div className="expertise-data col-lg-3">
                  <span className="expertise-info-header">
                    Technology & Innovation
                  </span>
                  <div className="expertise-item">
                    <p className="expertise-info-text">
                      ARC’s innovative, cloud-based infrastructure and solutions
                      drive return for the global air travel community.{" "}
                      <br></br>
                      <a
                        href="https://www2.arccorp.com/about-us/our-technology/"
                        className="expertise-info-link"
                      >
                        Our Technology
                      </a>
                    </p>
                  </div>
                  <div className="expertise-item">
                    <p className="expertise-info-text">
                      ARC’s analyzes the latest travel-related fraud schemes and
                      delivers timely alerts and resources to the industry.{" "}
                      <br></br>
                      <a
                        href="https://www2.arccorp.com/support-training/fraud-prevention/"
                        className="expertise-info-link"
                      >
                        Fraud Prevention
                      </a>
                    </p>
                  </div>
                  <div className="expertise-item">
                    <p className="expertise-info-text">
                      See the latest updates and innovations from the ARC team.{" "}
                      <br></br>
                      <a
                        href="https://www2.arccorp.com/about-us/newsroom/"
                        className="expertise-info-link"
                      >
                        The Latest From ARC
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <img
                src="https://www2.arccorp.com/globalassets/about-us/our-story/slants.png"
                alt=""
                className="story-slants expertise-bottom-slants"
              />
            </div>
          </div>
        </div>
        <div className="story-investments">
          <div
            className="container"
            style={{ position: "relative", zIndex: "2" }}
            id="investments"
          >
            <div className="row">
              <div className="col-lg-12">
                <div className="story-investments-header story-header">
                  <span className="story-preHeader">Our</span>{" "}
                  <span className="story-mainHeader">Investments</span>
                </div>
                <p className="story-investments-p">
                  ARC looks for opportunities to make strategic investments that
                  support the changing needs of the global travel community
                  while retaining industry ownership of critical systems and
                  technology. These investments help ARC deliver robust products
                  and services faster and at scale.
                </p>
                <div className="investments-section">
                  <div className="row">
                    <div className="investment-item col-md-6">
                      <a href="http://nutravel.com/" target={"_blank"}>
                        <img
                          src="https://www2.arccorp.com/globalassets/about-us/our-story/NUTRAVEL.png"
                          className="investment-icon"
                          style={{ width: "180px", height: "60px" }}
                          alt=""
                        />
                      </a>
                      <p className="investment-info">
                        ARC has a majority interest in nuTravel, an independent
                        company that builds custom and integrated booking,
                        loyalty management, and e-commerce platforms, supporting
                        suppliers’ corporate customer strategy. Universal
                        Connect is their newest solution, offering travel
                        managers the ability to manage direct bookings.
                      </p>
                      <hr className="investment-hr"></hr>
                    </div>
                    <div className="investment-item col-md-6">
                      <a href="https://www.blockskye.com/" target={"_blank"}>
                        <img
                          src="https://www2.arccorp.com/globalassets/about-us/our-story/BLOCKSKYE.png"
                          className="investment-icon"
                          style={{ width: "207px", height: "45px" }}
                          alt=""
                        />
                      </a>
                      <p className="investment-info">
                        Blockskye is a leader in blockchain solutions for the
                        travel industry, offering solutions that support sales,
                        reporting and expense management.
                      </p>
                      <hr className="investment-hr"></hr>
                    </div>
                  </div>
                  <div className="row" style={{marginBottom:"40px"}}>
                    <div className="investment-item col-md-6">
                      <a href="https://www.traxo.com/" target={"_blank"}>
                        <img
                          src="https://www2.arccorp.com/globalassets/about-us/our-story/TRAXO.png"
                          className="investment-icon"
                          style={{ width: "197px", height: "58px" }}
                          alt=""
                        />
                      </a>
                      <p className="investment-info">
                        Traxo’s solutions enable corporate travel managers to
                        see a complete view of traveler activity by integrating
                        agency and direct booking data supporting program
                        management and duty of care.
                      </p>
                      <hr className="investment-hr"></hr>
                    </div>
                    <div className="investment-item col-md-6">
                      <a href="https://www.3victors.com/" target={"_blank"}>
                        <img
                          src="https://www2.arccorp.com/globalassets/about-us/our-story/3VICTORS.png"
                          className="investment-icon"
                          style={{ width: "246px", height: "73px" }}
                          alt=""
                        />
                      </a>
                      <p className="investment-info">
                        3Victors is a big-data travel technology company that
                        provides data and analytics to generate insights
                        uncovering demand, pricing, marketing and revenue
                        opportunities.
                      </p>
                      <hr className="investment-hr"></hr>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="story-section7">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="story-brand" id="brand">
                  <div
                    className="story-section7-header brand-header story-header"
                    style={{ marginRight: "28px" }}
                  >
                    <span className="story-preHeader">Our</span>{" "}
                    <span className="story-mainHeader">Brand</span>
                  </div>
                  <p className="section7-p brand-p">
                    Our brand identity reflects our expertise, our pride in our
                    work and our vision for the future. <br />
                    <a
                      href="https://www2.arccorp.com/about-us/our-story/arc-brand/"
                      className="section7-a"
                    >
                      About the Brand
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="story-people" id="people">
                  <div className="story-section7-header story-header">
                    <span className="story-preHeader">Our</span>{" "}
                    <span className="story-mainHeader">People</span>
                  </div>
                  <p className="section7-p people-p">
                    ARC is home to some of the most brilliant minds in the
                    travel industry. We find fulfillment in helping our
                    customers thrive. We think big, embrace challenges and
                    identify creative solutions. <br />
                    <a
                      href="https://www2.arccorp.com/about-us/leadership-governance/"
                      className="section7-a"
                    >
                      Meet our Leadership
                    </a>{" "}
                    <br />
                    <a
                      href="https://www2.arccorp.com/about-us/careers/"
                      className="section7-a"
                    >
                      Join our Team
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="story-commitment">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="story-header commitment-header">
                  <span className="story-preHeader">Our</span>{" "}
                  <span className="story-mainHeader">Commitment</span>
                </div>
                <p className="commitment-p">
                  Our vision is to enable the growth of global air travel to
                  strengthen economies and enrich lives. We are dedicated to
                  developing our organization and culture to realize this
                  vision. Our{" "}
                  <a
                    href="https://www2.arccorp.com/globalassets/about-us/code-of-conduct-policy_final_cov.pdf"
                    className="commitment-a"
                  >
                    Code of Conduct
                  </a>{" "}
                  reflects our commitment to accomplishing this through
                  compliance with applicable laws and regulations and by
                  adopting best practices that will set us apart from our
                  competitors.
                </p>
                <small className="commitment-small">
                  Navex Global EthicsPoint (an independent, anonymous service)
                  can be accessed 24/7 by phone at 1-866-294-5698 or through
                  their{" "}
                  <a
                    href="https://secure.ethicspoint.com/domain/en/default_reporter.asp"
                    target={"_blank"}
                    className="commitment-a"
                  >
                    online portal
                  </a>{" "}
                  (enter entity name as Airlines Reporting Corporation).
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
