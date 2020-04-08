/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div
    sx={{
      display: "flex",
      justifyContent: "center",
      margin: "0 auto",
      border: "solid 2px",
      borderColor: "text",
      width: "1000px",
      zIndex: 100,
    }}
  >
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width="1000px"
      height="700px"
    />
  </div>
);
export default Video;
