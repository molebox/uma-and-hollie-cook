/** @jsx jsx */
import { jsx } from "theme-ui";

const LI = ({ children }) => (
  <li>
    <p
      sx={{
        fontFamily: "heading",
        fontSize: ["0.8em", "0.9em", "1.1em"],
        marginTop: "1em",
      }}
    >
      {children}
    </p>
  </li>
);

export default LI;
