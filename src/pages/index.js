/** @jsx jsx */
import { jsx } from "theme-ui";
import Main from "./../components/site/main";
import Video from "../components/video";
import Wave from "../components/common/wave";
import Latest from "../components/recipes/latest";

export default () => (
  <Main>
    <section
      sx={{
        margin: "2em",
        display: "flex",
        justifyContent: "center",
        minHeight: "200px",
      }}
    >
      <Video
        videoSrcURL="https://www.youtube.com/embed/9A6iuWI_S88"
        videoTitle="Cute Rabbits"
      />
    </section>
    <Wave>
      <Latest />
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
