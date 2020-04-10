/** @jsx jsx */
import { jsx } from "theme-ui";
import Background from "../../assets/ingredients.svg";

const Main = (props) => (
  <main
    sx={{
      gridArea: "main",
      minHeight: "calc(100vh - 20px)",
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
