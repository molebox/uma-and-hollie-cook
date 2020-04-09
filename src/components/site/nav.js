/** @jsx jsx */
import { jsx } from "theme-ui";
import { useSiteMetadata } from "./../useSiteMetadata";
import { Link } from "gatsby";

const Nav = () => {
  const { siteName } = useSiteMetadata();
  return (
    <nav
      sx={{
        display: "flex",
        justifyContent: ["center", "space-between", "space-around"],
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <Link
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
        to="/"
      >
        {siteName}
      </Link>
      <Link
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
          fontSize: ["0.8em", "0.9em", "1em"],
          fontWeight: "bold",
          color: "text",
          paddingTop: ["1em", null, null],
          letterSpacing: "text",
          textTransform: "uppercase",
          display: ["none", "block", "block"],
          // marginRight: [0, "10vw", "5vw"],
          ":hover": {
            color: "primary",
          },
        }}
        to="/recipes"
      >
        recept
      </Link>
      <Link
        sx={{
          textDecoration: "none",
          fontFamily: "heading",
          fontSize: ["0.8em", "0.9em", "1em"],
          fontWeight: "bold",
          color: "text",
          paddingTop: ["1em", null, null],
          letterSpacing: "text",
          textTransform: "uppercase",
          display: ["none", "block", "block"],
          // marginRight: [0, "10vw", "5vw"],
          ":hover": {
            color: "primary",
          },
        }}
        to="/about"
      >
        Om oss
      </Link>
    </nav>
  );
};

export default Nav;
