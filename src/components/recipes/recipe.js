/** @jsx jsx */
import { jsx } from "theme-ui";
import LI from "./../common/li";

const Recipe = () => {
  return (
    <article
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        fontFamily: "heading",
        border: "solid 2px",
        borderColor: "background",
        borderRadius: "20px",
        padding: "2em",
        // width: "25vw",
        background: "#fff",
      }}
    >
      <h3
        sx={{
          fontSize: ["1em", "1.2em", "1.5em"],
        }}
      >
        Senaste Receptet
      </h3>
      <ul>
        <LI>100g smör</LI>
        <LI>1 dl socker</LI>
        <LI>1 msk vaniljsocker</LI>
        <LI>3 msk kakao</LI>
        <LI>3 dl havregryn</LI>
        <LI>3 msk kallt starkt kaffe</LI>
        <LI>pärlsocker eller annan garnering</LI>
      </ul>
    </article>
  );
};

export default Recipe;
