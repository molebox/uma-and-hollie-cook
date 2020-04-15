/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

const H1 = ({ children }) => (
  <motion.h1
    initial={{ scale: 0 }}
    animate={{ rotate: -7, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
    sx={{
      fontFamily: "heading",
      fontSize: ["1.3em", "2.5em", "3em"],
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "text",
      transform: "rotate(-7deg)",
      background: "white",
      padding: "0.2em",
      border: "solid 5px",
      borderImageSource:
        "linear-gradient(90deg, rgba(0,105,146,1) 7%, rgba(69,145,175,1) 27%, rgba(255,188,160,1) 63%, rgba(232,121,75,1) 89%)",
      borderImageSlice: 1,
    }}
  >
    {children}
  </motion.h1>
);

export default H1;
