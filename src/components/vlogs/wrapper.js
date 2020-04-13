/** @jsx jsx */
import { jsx } from "theme-ui";

// https://www.raddy.co.uk/blog/netflix-carousel-using-css/

const Wrapper = ({ children }) => {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        overflow: "hidden",
        scrollBehavior: "smooth",
        zIndex: 99999999,
        height: "400px",
        width: "95vw",
        margin: "0 auto",
        backgroundColor: "secondary",
        padding: "1em",
        border: "solid 2px",
        borderColor: "secondary",
        borderRadius: "20px",
      }}
    >
      <h2
        sx={{
          fontFamily: "heading",
          textAlign: "center",
          textTransform: "uppercase",
          fontSize: "2em",
        }}
      >
        Tidigare vloggar
      </h2>
      {children}
    </div>
  );
};

export default Wrapper;
