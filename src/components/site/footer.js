/** @jsx jsx */
import { jsx } from "theme-ui";

const heart = `💖`;

const Footer = (props) => {
  return (
    <footer
      sx={{
        gridArea: "footer",
        backgroundColor: "secondary",
        color: "text",
        height: "100%",
        textAlign: "center",
        padding: "2em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
          fontSize: ["0.8em", "0.9em", "1.2em"],
          fontWeight: "bold",
          color: "text",
          paddingTop: ["1em", null, null],
          letterSpacing: "text",
          ":hover": {
            color: "primary",
          },
        }}
        href="https://www.gatsbyjs.org/"
      >
        Created with {heart} for my girls
      </a>
    </footer>
  );
};

export default Footer;
