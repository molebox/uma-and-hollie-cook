/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";
import H1 from "../common/h1";

const Header = ({ title }) => {
  return (
    <header
      sx={{
        gridArea: "nav",
        color: "text",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: ["150px", "270px"],
        margin: "0 1em",
      }}
    >
      <H1>{title}</H1>
    </header>
  );
};

export default Header;
