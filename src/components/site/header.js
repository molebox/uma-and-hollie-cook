/** @jsx jsx */
import { jsx } from "theme-ui";
import Nav from "./nav";

const Header = () => {
  return (
    <header
      sx={{
        gridArea: "nav",
        color: "text",
        height: "100%",
        textAlign: "center",
        padding: "2em",
        // background: 'transparent',
        // borderBottom: "solid 10px",
        // borderImageSource:
        //   "linear-gradient(90deg, rgba(0,105,146,1) 7%, rgba(69,145,175,1) 27%, rgba(255,188,160,1) 63%, rgba(232,121,75,1) 89%)",
        // borderImageSlice: 1,
        // position: "relative",
      }}
    >
      <Nav />
    </header>
  );
};

export default Header;
