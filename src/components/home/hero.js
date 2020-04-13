/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const Hero = ({ children }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(auto, 550px))",
        gridTemplateRows: "auto",
        gap: "3em",
        placeItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 9999,
        minHeight: "600px",
        margin: "2em auto",
        backgroundColor: "transparent",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Hero;
