/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import InternalLink from "./../common/internal-link";

const SiteLinkBox = ({ section, Icon, description, btnText }) => {
  return (
    <motion.section
      sx={{
        display: "grid",
        gridTemplateRows: [null, "repeat(4, minmax(50px, 1fr))"],
        gap: ["2em", "1em", "2em"],
        background: "white",
        padding: "1em",
        placeItems: "center",
        borderRadius: "20px",
        margin: "0 1em",
        border: "solid 2px",
        borderColor: "text",
      }}
    >
      <motion.div
        sx={{
          height: "6em",
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
      <InternalLink text={btnText} section={section} />
    </motion.section>
  );
};

export default SiteLinkBox;
