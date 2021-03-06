/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";
import ExternalLink from "./../common/external-link";
import { useInView } from "react-intersection-observer";

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

const heart = `💖`;

const SiteInfo = () => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={{ scale: inView ? 1 : 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        width: ["90%", "80%", "70%"],
        background: "white",
        padding: "2em",
        border: "solid 2px",
        borderColor: "text",
        borderRadius: "20px",
        fontFamily: "heading",
        fontWeight: "bold",
        color: "text",
        paddingTop: "1em",
        letterSpacing: "text",
      }}
    >
      <p
        sx={{
          textAlign: "center",
          marginBottom: "1.5em",
          fontSize: ["0.8em", "0.9em", "1em"],
        }}
      >
        Created with {heart} for my girls with:
      </p>

      <div
        sx={{
          display: "flex",
          flexDirection: ["column", "row", "row"],
          justifyContent: "space-evenly",
        }}
      >
        <ExternalLink link="https://www.gatsbyjs.org/" text="Gatsby" />
        <ExternalLink
          link="https://www.framer.com/motion/"
          text="Framer Motion"
        />
        <ExternalLink link="https://www.sanity.io/" text="Sanity.io" />
        <ExternalLink link="https://excalidraw.com/" text="Excali Draw" />
      </div>
      <div
        sx={{
          textAlign: "center",
          paddingTop: "3em",
        }}
      >
        <ExternalLink
          link="https://richardhaines.dev/"
          text="richardhaines.dev"
        />
      </div>
    </motion.div>
  );
};

export default SiteInfo;
