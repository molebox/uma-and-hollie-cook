/** @jsx jsx */
import { jsx } from "theme-ui";

const VideoNav = ({ children, sectionId }) => {
  return (
    <a
      href={`#${sectionId}`}
      sx={{
        position: "absolute",
        color: "primary",
        textDecoration: "none",
        fontSize: "6em",
        background: "rgb(0,0,0)",
        width: "30px",
        padding: "20px",
        textAlign: "center",
        zIndex: 1,
        cursor: "pointer",
        ":nth-of-type(1)": {
          top: 0,
          bottom: 0,
          left: 0,
          background:
            "linear-gradient(-90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
        },
        ":nth-of-type(2)": {
          top: 0,
          bottom: 0,
          right: 0,
          background:
            "linear-gradient(-90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
        },
      }}
    >
      {children}
    </a>
  );
};

export default VideoNav;
