/** @jsx jsx */
import { jsx } from "theme-ui";
import containerStyles from "./vlog.module.css";

// https://www.raddy.co.uk/blog/netflix-carousel-using-css/

const Wrapper = ({ children }) => {
  return <div className={containerStyles.container}>{children}</div>;
};

export default Wrapper;
