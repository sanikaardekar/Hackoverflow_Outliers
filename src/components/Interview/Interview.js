import "./Interview.css";
import React, { useState } from "react";
import Webcam from "react-webcam";
import WebCamModel from "./WebCamModel";
import { useTime } from "react-timer-hook";
import { Link } from "react-router-dom";

function Interview() {
  const [show, setShow] = useState(false);
  const { seconds, minutes, hours, ampm } = useTime({ format: "12-hour" });

  function handleSession() {
    setShow(!show);
  }
  function handleEndSession() {
    setShow(!show);
  }

  if (!show) {
    return (
      <>
        <h1 className="text-center">Interview</h1>
        <div className="pose-container">
          <div className="right">
            <Webcam
              style={{
                position: "relative",
                left: "50px",
                zIndex: "2",
                width: "500px",
                height: "500px",
              }}
            />
          </div>
          <div className="left">
            <div className="time">
              <h3>Session Time</h3>
              <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
              <span>{ampm}</span>
              <h4>Practise your posture for interview and get reviews to improve</h4>
            </div>
            <button className="btn btn-primary" onClick={handleSession}>
              Start Session
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="text-center">Interview</h1>
      <div className="pose-container">
        <div className="right">
          <Webcam
            style={{
              position: "relative",
              left: "50px",
              zIndex: "2",
              width: "400px",
              height: "400px",
            }}
          />
        </div>
        <div className="left">
          <div className="time">
            <h1>Session Time</h1>
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            <span>{ampm}</span>
          </div>

          <div className="skel">
            <WebCamModel />
          </div>
          <Link to="https://shruti0196-web-scraper-main-i0aivz.streamlit.app/">
            <button className="btn btn-primary">End Session</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Interview;
