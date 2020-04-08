/** @jsx jsx */
import { jsx } from "theme-ui";
import Main from "./../components/site/main";
import Video from "../components/video";
import { Cookie, Egg, Flour } from "../components/common/icons";
import Wave from "../components/common/wave";

export default () => (
  <Main>
    <section
      sx={{
        height: "700px",
      }}
    >
      <Video
        videoSrcURL="https://www.youtube.com/embed/9A6iuWI_S88"
        videoTitle="Cute Rabbits"
      />
    </section>
    <Wave></Wave>
  </Main>
);
