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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          gap: "2em",
          background: "white",
          maxWidth: "800px",
          padding: "1em",
          borderRadius: "20px",
          borderColor: "text",
          border: "solid 2px",
          margin: "0 auto",
        }}
      >
        <h2
          sx={{
            fontFamily: "heading",
            fontSize: ["1em", "2em", "2.5em"],
            margin: ".5em auto",
            textAlign: "center",
          }}
        >
          Chokladbollar
        </h2>
        <Video
          videoSrcURL="https://www.youtube.com/embed/9A6iuWI_S88"
          videoTitle="Cute Rabbits"
        />
        <section
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: ["1.5em", "1.5em", "2em"],
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
