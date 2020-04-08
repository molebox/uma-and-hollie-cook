/** @jsx jsx */
import { jsx } from "theme-ui";

const Footer = (props) => {
  return (
    <footer
      sx={{
        gridArea: "footer",
        backgroundColor: "text",
        color: "text",
        height: "100%",
        textAlign: "center",
        padding: "2em",
        borderTop: "solid 10px",
        borderImageSource:
          "linear-gradient(90deg, rgba(0,105,146,1) 7%, rgba(69,145,175,1) 27%, rgba(255,188,160,1) 63%, rgba(232,121,75,1) 89%)",
        borderImageSlice: 1,
        display: "grid",
        gridTemplateColumns: "",
      }}
    >
      <p
        sx={{
          fontFamily: "heading",
          color: "invert",
        }}
      >
        This is the footer
      </p>
    </footer>
  );
};

export default Footer;
