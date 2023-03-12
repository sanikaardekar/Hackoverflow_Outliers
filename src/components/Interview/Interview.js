import "./Interview.css";
import React, { useState } from "react";
import Webcam from "react-webcam";
import WebCamModel from "./WebCamModel";
import { useTime } from "react-timer-hook";


function Interview() {
    const [show, setShow] = useState(false);
    const { seconds, minutes, hours, ampm } = useTime({ format: "12-hour" });

    function handleSession() {
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
                    <button className="btn btn-primary" onClick={handleSession}>
                        End Session
                    </button>
                </div>
            </div>
        </>
    );
}

export default Interview;