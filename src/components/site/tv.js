/** @jsx jsx */
import { jsx } from "theme-ui";
import TVBackground from "../../assets/tv.svg";

const TV = ({ children }) => {
  return (
    <section
      sx={{
        zIndex: 100,
        // position: 'absolute',
        width: "1200px",
        alignSelf: "center",
      }}
    >
      <TVBackground
        sx={{
          zIndex: -1000,
          position: "absolute",
        }}
      />
      {children}
    </section>
  );
};

export default TV;
