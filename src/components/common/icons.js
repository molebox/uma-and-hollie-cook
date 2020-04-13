/** @jsx jsx */
import { jsx } from "theme-ui";
import CookieIcon from "../../assets/cookie.svg";
import EggIcon from "../../assets/egg.svg";
import FlourIcon from "../../assets/flour.svg";
import TVIcon from "../../assets/tv-static.svg";
import HouseIcon from "../../assets/house.svg";

export const House = () => (
  <HouseIcon
    sx={{
      width: "8em",
      height: "7em",
      gridArea: "cookie",
    }}
  />
);

export const TV = () => (
  <TVIcon
    sx={{
      width: "7em",
      height: "7em",
      gridArea: "cookie",
    }}
  />
);

export const Cookie = () => (
  <CookieIcon
    sx={{
      width: "7em",
      height: "7em",
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
      width: "7em",
      height: "7em",
      gridArea: "flour",
    }}
  />
);
