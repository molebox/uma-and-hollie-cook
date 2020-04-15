/** @jsx jsx */
import { jsx } from "theme-ui";

const LI = ({ children }) => (
  <li>
    <p
      sx={{
        fontFamily: "heading",
        fontSize: ["1em", "1.2em", "1.3em"],
        marginTop: "1em",
      }}
    >
      {children}
    </p>
  </li>
);

export default LI;
