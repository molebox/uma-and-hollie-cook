/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const InternalLink = ({ text, section }) => (
  <Link
    sx={{
      textTransform: "uppercase",
      border: "solid 2px",
      borderColor: "text",
      width: ["135px", "200px", "220px"],
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      border: "solid 3px",
      borderImageSource:
        "linear-gradient(90deg, rgba(0,105,146,1) 7%, rgba(69,145,175,1) 27%, rgba(255,188,160,1) 63%, rgba(232,121,75,1) 89%)",
      borderImageSlice: 1,
      ":hover": {
        background:
          "linear-gradient(90deg, rgba(0,105,146,1) 7%, rgba(69,145,175,1) 27%, rgba(255,188,160,1) 63%, rgba(232,121,75,1) 89%)",
        border: "solid 2px",
        borderColor: "text",
      },
      fontFamily: "heading",
      fontWeight: "bold",
      fontSize: ["0.7em", "1em", "1em"],
      color: "text",
      textDecoration: "none",
    }}
    to={section}
  >
    {text}
  </Link>
);

export default InternalLink;
