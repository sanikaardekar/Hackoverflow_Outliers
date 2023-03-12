import React from "react";
import heading from "../../static/heading.png"

const Techstack = () => {
  return (
    <>
      <div id="clients" className="the-clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>
                  Tech <em style={{color:"#7C32FF"}}>Stack</em> We Use
                </h4>
                <img src={heading} alt="" />
                <p>Tools and Items we used</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="grid">
                  <div className="row">
                    <div className="col-lg-7 align-self-center">
                      <div className="menu">
                        <div className="first-thumb active">
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4 style={{ color: "black" }}>Frontend</h4>
                                <span className="date">Client</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">
                                  React.js, Bootstrap, Material UI
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Backend</h4>
                                <span className="date">Server</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">
                                  Django, REST Framework
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Machine Learning</h4>
                                <span className="date">Data Science & NLP</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">
                                  GPT, Pandas, Numpy
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Collaboration</h4>
                                <span className="date">Version Control</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">
                                  GitHub, Git, Python Anywhere
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <ul className="nacc">
                        <li className="active">
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src="img/quote.png" alt="" />
                                    <p>
                                      “Tell me and I forget. Teach me and I
                                      remember. Make me a visual part of it and
                                      I learn” <br />
                                      ~Benjamin Franklin
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img
                                      src="assets/images/client-image.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Techstack;
