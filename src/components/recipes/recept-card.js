/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Link } from "gatsby";

const ReceptCard = ({ thumb, thumbAlt, title, description, datePosted }) => {
  return (
    <Link
      sx={{
        display: "grid",
        gridTemplateColumns: ["1fr", "30% 1fr"],
        gridTemplateRows: "auto",
        gap: "1em",
        padding: [null, "2em"],
        fontFamily: "heading",
        fontWeight: "bold",
        color: "text",
        letterSpacing: "text",
        height: "250px",
        textDecoration: "none",
        margin: "1em",
        marginBottom: ["2em", null],
        border: "solid 3px",
        borderRadius: "20px",
        // borderColor: 'transparent',
        // borderImageSource:
        //   "linear-gradient(90deg, rgba(0,105,146,1) 7%, rgba(69,145,175,1) 27%, rgba(255,188,160,1) 63%, rgba(232,121,75,1) 89%)",
        // borderImageSlice: 1,
      }}
    >
      <img
        sx={{
          alignSelf: "center",
          justifySelf: "center",
        }}
        src={thumb}
        alt={thumbAlt}
      />
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: ["space-between", "space-around"],
          width: "100%",
        }}
      >
        <p
          sx={{
            fontSize: ["1em", "1.6em"],
          }}
        >
          {title}
        </p>
        <p
          sx={{
            fontSize: ["1em", "1.1em"],
          }}
        >
          {description}
        </p>
        <p>{datePosted}</p>
      </div>
    </Link>
  );
};

export default ReceptCard;
