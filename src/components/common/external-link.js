/** @jsx jsx */
import { jsx } from "theme-ui";

const ExternalLink = ({ text, link }) => (
  <a
    sx={{
      fontFamily: "heading",
      fontSize: ["0.8em", "0.9em", "1.1em"],
      marginTop: "1em",
      letterSpacing: "text",
      color: "text",
      cursor: "pointer",
      ":hover": {
        color: "primary",
      },
    }}
    href={link}
  >
    {text}
  </a>
);

export default ExternalLink;
