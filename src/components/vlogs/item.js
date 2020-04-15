/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import GatsbyImage from "gatsby-image";
import itemStyles from "./vlog.module.css";

const Item = ({ fluidSrc, imageAlt, vlogSlug }) => {
  return (
    <Link className={itemStyles.item} to={vlogSlug}>
      <img src={fluidSrc} alt={imageAlt} />
      {/* <GatsbyImage fluid={fluidSrc} alt={imageAlt}/> */}
    </Link>
  );
};

export default Item;
