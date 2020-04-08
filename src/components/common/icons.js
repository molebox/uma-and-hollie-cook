/** @jsx jsx */
import { jsx } from "theme-ui";
import CookieIcon from "../../assets/cookie.svg";
import EggIcon from "../../assets/egg.svg";
import FlourIcon from "../../assets/flour.svg";

export const Cookie = () => (
  <CookieIcon
    sx={{
      width: "6em",
      height: "6em",
      gridArea: "cookie",
    }}
  />
);

export const Egg = () => (
  <EggIcon
    sx={{
      width: "6em",
      height: "6em",
      gridArea: "egg",
    }}
  />
);

export const Flour = () => (
  <FlourIcon
    sx={{
      width: "10em",
      height: "10em",
      gridArea: "flour",
    }}
  />
);
