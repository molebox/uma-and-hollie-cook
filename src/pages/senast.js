/** @jsx jsx */
import { jsx } from "theme-ui";
import Main from "../components/site/main";
import Video from "./../components/video";
import Wave from "./../components/common/wave";
import Latest from "./../components/recipes/latest";
import Header from "./../components/site/header";
import InternalLink from "./../components/common/internal-link";

const Senast = () => {
  return (
    <Main>
      <Header title="Senast recept" />
      <section
        sx={{
          margin: "2em",
          display: "flex",
          flexDirection: "column",
          // gridTemplateColumns: "repeat(auto-fit, minmax(auto, 800px))",
          justifyContent: "center",
          alignItems: "center",
          // minHeight: "100px",
          position: "relative",
          gap: "2em",
          background: "white",
          maxWidth: "1000px",
          padding: "2.5em",
          borderRadius: "20px",
          borderColor: "text",
          border: "solid 2px",
          margin: "0 auto",
        }}
      >
        <Video
          videoSrcURL="https://www.youtube.com/embed/9A6iuWI_S88"
          videoTitle="Cute Rabbits"
        />
        <section
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: [null, "1em", "2em"],
            width: "100%",
          }}
        >
          <InternalLink text="hem" section="/" />
          <InternalLink text="mer recept" section="recept" />
        </section>
      </section>

      <Wave>
        <Latest />
      </Wave>
    </Main>
  );
};

export default Senast;
