/** @jsx jsx */
import { jsx } from "theme-ui";
import Background from "../../assets/background-ingrediants.svg";

const Main = (props) => (
  <main
    sx={{
      gridArea: "main",
      minHeight: "calc(100vh - 20px)",
      // paddingTop: "1.5em",
    }}
  >
    <Background
      sx={{
        zIndex: -100,
        position: "absolute",
      }}
    />
    {props.children}
  </main>
);

export default Main;
