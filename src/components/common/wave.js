/** @jsx jsx */
import { jsx } from "theme-ui";

const Wave = ({ children }) => {
  return (
    <section
      sx={{
        background: "primary",
        marginBottom: "-5px",
        width: "100%",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E9D758"
          fill-opacity="1"
          d="M0,128L40,149.3C80,171,160,213,240,240C320,267,400,277,480,266.7C560,256,640,224,720,218.7C800,213,880,235,960,229.3C1040,224,1120,192,1200,160C1280,128,1360,96,1400,80L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <section
        sx={{
          backgroundColor: "secondary",
          minHeight: "300px",
          marginTop: "-5px",
          padding: "2em",
        }}
      >
        {children}
      </section>
    </section>
  );
};

export default Wave;
