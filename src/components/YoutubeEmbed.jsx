import React from "react";
import ReactPlayer from "react-player";
import "../css/YoutubeCss.css";
import { useRef } from "react";

const VIDEO_PATH = "https://www.youtube.com/watch?v=ScWfeHqJKfk&t=6s";

const YoutubeEmbed = () => {
  const playerRef = useRef(null);
  return (
    <div className="video-responsive">
      <ReactPlayer
        ref={playerRef}
        url={VIDEO_PATH}
        controls={true}
        className="iframe"
      />
    </div>
  );
};

export default YoutubeEmbed;
