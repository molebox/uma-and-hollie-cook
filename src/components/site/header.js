/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header
      sx={{
        gridArea: "nav",
        color: "text",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: ["150px", "270px"],
        margin: "0 1em",
      }}
    >
      <motion.h1
        // initial={{rotate: -7}}
        // whileHover={{rotate: 2}}
        initial={{ scale: 0 }}
        animate={{ rotate: -7, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        sx={{
          fontFamily: "heading",
          fontSize: ["1.3em", "2.5em", "4em"],
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
        baka med uma och hollie
      </motion.h1>
      {/* <Nav />
      <TopWave>
      
      </TopWave> */}
    </header>
  );
};

export default Header;
