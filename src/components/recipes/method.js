/** @jsx jsx */
import { jsx } from "theme-ui";
import LI from "./../common/li";

const Method = () => {
  return (
    <article
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        fontFamily: "heading",
        borderColor: "text",
        border: "solid 2px",
        borderRadius: "20px",
        padding: "2em",
        // width: "25vw",
        height: "auto",
        background: "#fff",
      }}
    >
      <h3
        sx={{
          fontSize: ["1em", "1.2em", "1.5em"],
        }}
      >
        Gör så här
      </h3>
      <ul>
        <LI>Smält smöret och låt puttra en kort stund.</LI>
        <LI>
          Rör ihop socker, vaniljsocker, kakao, havregryn, kaffe och smöret.
          Ställ in i kylskåp så att smeten stelnar lite, ca 1 timme.
        </LI>
        <LI>
          Forma bollar. Rulla i pärlsocker (gärna mångfärgat), kokos eller annan
          garnering.
        </LI>
      </ul>
    </article>
  );
};

export default Method;
