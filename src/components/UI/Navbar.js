import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="default-header">
        <nav className="navbar navbar-expand-lg  navbar-light">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <h4 style={{ color: "white" }}>EduLearn</h4>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="lnr lnr-menu"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end align-items-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/coding">Coding</Link>
                </li>
                <li>
                  <Link to="/maths">Maths</Link>
                </li>
                <li>
                  <Link to="/mythology">Mythology</Link>
                </li>

                <li>
                  <Link to="/communication">Communication</Link>
                </li>
                <li>
                  <Link to="/videochat">Video Call</Link>
                </li>
                <li>
                  <Link to="/calendar">Calendar</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
