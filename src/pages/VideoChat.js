import React from "react";
import "./VideoChat.css";

const VideoChat = () => {
  return (
    <div className="whereby">
      <iframe
        src="https://sanikaardekar.whereby.com/nekoma4b9b4d29-0f61-4aef-9ad7-fe75649731ff"
        allow="camera; microphone; fullscreen; speaker; display-capture"
      ></iframe>
    </div>
  );
};

export default VideoChat;
