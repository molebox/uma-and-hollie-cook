/** @jsx jsx */
import { jsx } from "theme-ui";
import { useSiteMetadata } from "./../useSiteMetadata";

const Header = () => {
  const { siteName } = useSiteMetadata();
  return (
    <header
      sx={{
        gridArea: "nav",
        backgroundColor: "text",
        color: "text",
        height: "100%",
        textAlign: "center",
        padding: "2em",
        // background: 'transparent',
        borderBottom: "solid 10px",
        borderImageSource:
          "linear-gradient(90deg, rgba(0,105,146,1) 7%, rgba(69,145,175,1) 27%, rgba(255,188,160,1) 63%, rgba(232,121,75,1) 89%)",
        borderImageSlice: 1,
        position: "relative",
      }}
    >
      <h1
        sx={{
          fontFamily: "heading",
          color: "invert",
          fontWeight: "400",
        }}
      >
        {siteName}
      </h1>
    </header>
  );
};

export default Header;
