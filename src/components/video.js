/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div
    sx={{
      width: "100%",
      height: "100%",
      maxHeight: "840px",
      maxWidth: "1240px",
      overflow: "hidden",
      // position: 'absolute',
      borderRadius: "20px",
    }}
  >
    <div
      sx={{
        // display: "flex",
        // justifyContent: "center",
        // margin: "0 auto",
        // width: "1240px",
        // borderRadius: '20px',
        // background: 'primary'
        position: "relative",
        width: "auto",
        minWidth: "100%",
        height: "auto",
        minHeight: "100%",
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
        width="1240px"
        height="700px"
      />
    </div>
  </div>
);
export default Video;
