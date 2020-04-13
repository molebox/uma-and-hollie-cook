/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import TVBackground from "../assets/tv.svg";

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div
    sx={{
      width: "100%",
      height: "100%",
      maxHeight: "600px",
      maxWidth: "800px",
      overflow: "hidden",
      position: "relative",
      borderRadius: "20px",
      // zIndex: 1000
    }}
  >
    <div
      sx={{
        position: "relative",
        width: "auto",
        minWidth: "100%",
        height: "auto",
        minHeight: "100%",
        paddingTop: "60.25%",
        zIndex: "99999",
      }}
    >
      <iframe
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  </div>
);
export default Video;
