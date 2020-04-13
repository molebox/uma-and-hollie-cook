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
    <h2
      sx={{
        fontFamily: "heading",
        fontSize: ["1em", "1.2em", "2em"],
        textAlign: "center",
        marginBottom: "3em",
        ":before": {
          content: "''",
          borderBottom: "solid 2px",
          borderColor: "text",
          paddingTop: "1em",
          width: "50px",
        },
      }}
    >
      Chokladbollar
    </h2>
    <section
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(auto, 600px))",
        placeContent: "center",
        gridAutoRows: "auto",
        // width: '100%',
        gap: "2em",
      }}
    >
      <Recipe />
      <Method />
    </section>
  </section>
);

export default Latest;
