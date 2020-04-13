/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { motion } from "framer-motion";

const SiteLinkBox = ({ section, Icon, description, btnText }) => {
  return (
    <motion.section
      sx={{
        display: "grid",
        gridTemplateRows: "repeat(4, 1fr)",
        gap: "2em",
        background: "white",
        padding: "1em",
        placeItems: "center",
        borderRadius: "20px",
        margin: "0 1em",
      }}
    >
      <motion.div
        sx={{
          width: "6em",
          height: "6em",
          /// zIndex: 9000
        }}
      >
        {<Icon />}
      </motion.div>
      <motion.div
        sx={{
          textTransform: "uppercase",
          fontFamily: "heading",
          fontSize: ["2em", "3em", "5em"],
          fontWeight: "bold",
        }}
      >
        {section}
      </motion.div>
      <motion.div
        sx={{
          fontFamily: "heading",
          fontSize: ["1.2em", "1.5em", "1.5em"],
          textAlign: "center",
        }}
      >
        {description}
      </motion.div>
      <Link
        sx={{
          textTransform: "uppercase",
          border: "solid 2px",
          borderColor: "text",
          width: "220px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          border: "solid 3px",
          borderImageSource:
            "linear-gradient(90deg, rgba(0,105,146,1) 7%, rgba(69,145,175,1) 27%, rgba(255,188,160,1) 63%, rgba(232,121,75,1) 89%)",
          borderImageSlice: 1,
          ":hover": {
            background:
              "linear-gradient(90deg, rgba(0,105,146,1) 7%, rgba(69,145,175,1) 27%, rgba(255,188,160,1) 63%, rgba(232,121,75,1) 89%)",
          },
          fontFamily: "heading",
          fontWeight: "bold",
          color: "text",
          textDecoration: "none",
        }}
        to={section}
      >
        {btnText}
      </Link>
    </motion.section>
  );
};

export default SiteLinkBox;
