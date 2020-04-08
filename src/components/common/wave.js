/** @jsx jsx */
import { jsx } from "theme-ui";

const Wave = ({ children }) => {
  return (
    <section
      sx={{
        background: "primary",
        marginBottom: "-5px",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E9D758"
          fill-opacity="1"
          d="M0,32L40,53.3C80,75,160,117,240,149.3C320,181,400,203,480,229.3C560,256,640,288,720,272C800,256,880,192,960,186.7C1040,181,1120,235,1200,250.7C1280,267,1360,245,1400,234.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <section
        sx={{
          backgroundColor: "secondary",
          height: "500px",
          marginTop: "-5px",
        }}
      >
        {children}
      </section>
    </section>
  );
};

export default Wave;
