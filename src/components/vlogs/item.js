/** @jsx jsx */
import { jsx } from "theme-ui";
import { duration } from "./index";

const Item = ({ children }) => {
  return (
    <div
      sx={{
        padding: "0 2px",
        transition: `${duration} all`,
        ":hover": {
          margin: "0 40px",
          transform: "scale(1.2)",
        },
      }}
    >
      {children}
    </div>
  );
};

export default Item;
