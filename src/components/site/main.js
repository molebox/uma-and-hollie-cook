/** @jsx jsx */
import { jsx } from "theme-ui";
import Background from "../../assets/background-yellow.svg";

const Main = (props) => (
  <main
    sx={{
      gridArea: "main",
      minHeight: "100%",
      height: "fit-content",
      // minHeight: "calc(100vh - 20px)",
    }}
  >
    <Background
      sx={{
        zIndex: -999999,
        position: "absolute",
        opacity: "0.8",
      }}
    />
    {props.children}
  </main>
);

export default Main;
