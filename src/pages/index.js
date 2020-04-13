/** @jsx jsx */
import { jsx } from "theme-ui";
import Main from "./../components/site/main";
import Wave from "../components/common/wave";
import Hero from "../components/home/hero";
import SiteLinkBox from "../components/home/site-link-box";
import { Cookie, TV, House } from "./../components/common/icons";
import Header from "../components/site/header";
import { motion } from "framer-motion";
import SiteInfo from "./../components/home/site-info";

// inspiration: http://nelucebotari.com/#hero

const d1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit`;
const d2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit`;
const d3 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit`;

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default () => {
  const sections = [
    <SiteLinkBox
      section="senast"
      Icon={TV}
      description={d1}
      btnText="kolla in det senaste"
    />,
    <SiteLinkBox
      section="recept"
      Icon={Cookie}
      description={d2}
      btnText="kolla recept"
    />,
    <SiteLinkBox
      section="om-oss"
      Icon={House}
      description={d3}
      btnText="läs om oss"
    />,
  ];

  return (
    <Main>
      <Header title="baka med uma och hollie" />

      <Hero>
        {sections.map((section, index) => (
          <motion.li sx={{ listStyle: "none" }} key={index} variants={item}>
            {section}
          </motion.li>
        ))}
      </Hero>
      <Wave>
        <SiteInfo />
      </Wave>
    </Main>
  );
};
