/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Global, css } from "@emotion/core";
import {
  PhoneTemplateAreas,
  TabletTemplateAreas,
  DesktopTemplateAreas,
} from "./../window/index";
import Header from "../components/site/header";
import Footer from "../components/site/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            scroll-behavior: smooth;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            width: 100%;
            overflow-x: hidden;
          }
        `}
      />
      <div
        sx={{
          display: "grid",
          gridTemplateRows: "auto",
          gridTemplateColumns: [
            "repeat(4, 1fr)",
            "repeat(6, 1fr)",
            "10vw repeat(6, 1fr) 10vw",
          ],
          gridTemplateAreas: [
            PhoneTemplateAreas,
            TabletTemplateAreas,
            DesktopTemplateAreas,
          ],
        }}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
