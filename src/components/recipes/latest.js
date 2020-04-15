/** @jsx jsx */
import { jsx } from "theme-ui";
import Recipe from "./recipe";
import Method from "./method";

const Latest = () => (
  <section
    sx={{
      display: "flex",
      flexDirection: "column",
    }}
  >
    <section
      sx={{
        display: "grid",
        gridTemplateColumns: [null, "repeat(auto-fit, minmax(auto, 600px))"],
        placeContent: "center",
        gridAutoRows: "auto",
        gap: "2em",
        width: ["80%", "100%", "100%"],
        margin: "0 auto",
      }}
    >
      <Recipe />
      <Method />
    </section>
  </section>
);

export default Latest;
