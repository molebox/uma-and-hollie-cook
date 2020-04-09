/** @jsx jsx */
import { jsx } from "theme-ui";
import Main from "./../components/site/main";
import Video from "../components/video";
import Latest from "../components/latest";
import { Cookie, Egg, Flour } from "../components/common/icons";
import Wave from "../components/common/wave";
// import TopWave from "../components/common/top-wave";

export default () => (
  <Main>
    <section
      sx={{
        margin: "2em",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Video
        videoSrcURL="https://www.youtube.com/embed/9A6iuWI_S88"
        videoTitle="Cute Rabbits"
      />
    </section>
    <Wave>
      <Cookie />
      <Egg />
      <Flour />
    </Wave>
  </Main>
);

// export default () => (
//   <Main>
//     <div sx={{
//       // display: 'grid',
//       // gridTemplateRows: 'auto'
//     }}>
//     <TopWave>
//     <Video
//         videoSrcURL="https://www.youtube.com/embed/9A6iuWI_S88"
//         videoTitle="Cute Rabbits"
//       />
//     </TopWave>
//     <section sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'
//       }}>
//         recipes here
//       </section>

//     <Wave>
//       <section sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'
//       }}>
//         recipes here
//       </section>
//     </Wave>
//     </div>

//   </Main>
// );
