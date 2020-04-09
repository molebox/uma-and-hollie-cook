/** @jsx jsx */
import { jsx } from "theme-ui";

const TopWave = ({ children }) => {
  return (
    <section
      sx={{
        marginTop: "-30px",
        zIndex: -1000,
        marginBottom: "-500px",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E9D758"
          fill-opacity="1"
          d="M0,96L48,128C96,160,192,224,288,224C384,224,480,160,576,133.3C672,107,768,117,864,117.3C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <section
        sx={{
          height: "700px",
          marginBottom: "500px",
        }}
      >
        {children}
      </section>
    </section>
  );
};

export default TopWave;
