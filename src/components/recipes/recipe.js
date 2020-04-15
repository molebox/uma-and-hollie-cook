/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import LI from "./../common/li";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Recipe = () => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <motion.article
      ref={ref}
      animate={{ x: inView ? 0 : "-100%" }}
      transition={{ delay: 0.2 }}
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
        background: "#fff",
      }}
    >
      <h3
        sx={{
          fontSize: ["1em", "1.2em", "1.5em"],
        }}
      >
        Receptet
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
    </motion.article>
  );
};

export default Recipe;
