import React from "react";

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import "./src/styles/variables/colors.css";
import "./src/styles/variables/general.css";
import "./src/styles/variables/sizes.css";
import "./src/styles/variables/type.css";
import "./src/styles/global.scss";

import "typeface-ibm-plex-sans";

import Layout from "./src/components/layout/Layout";
import { Provider } from "./src/context/Context";

export const wrapPageElement = ({ element, props }) => {
  return <Layout location={props.location}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>;
};
