/** @jsx jsx */
import { jsx } from "theme-ui";

const VideoSection = ({ children, sectionId }) => {
  return (
    <section
      id={sectionId}
      sx={{
        width: "100%",
        position: "relative",
        display: "grid",
        gridTemplateRow: "repeat(5, auto)",
        margin: "20px 0",
        minHeight: "200px",
        gap: "1em",
      }}
    >
      {children}
    </section>
  );
};

export default VideoSection;
