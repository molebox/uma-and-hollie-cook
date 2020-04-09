/** @jsx jsx */
import { jsx } from "theme-ui";

const Latest = () => (
  <main
    sx={{
      gridArea: "latest",
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "start",
      fontFamily: "heading",
      margin: "5em auto",
    }}
  >
    <h2>Senaste Receptet</h2>
    <h3
      sx={{
        margin: "1em 0 1em 0",
      }}
    >
      Chokladbollar
    </h3>
    <ul>
      <li>100g smör</li>
      <li>1 dl socker</li>
      <li>1 msk vaniljsocker</li>
      <li>3 msk kakao</li>
      <li>3 dl havregryn</li>
      <li>3 msk kallt starkt kaffe</li>
      <li>pärlsocker eller annan garnering</li>
    </ul>
  </main>
);

export default Latest;
