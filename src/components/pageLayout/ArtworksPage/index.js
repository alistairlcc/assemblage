import React, { useState } from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Grid } from "../../common/Grid";

import * as styles from "./ArtworksPage.module.scss";

const ArtworksPage = ({ artworks }) => {
  const [simple, setSimple] = useState(false);
  return (
    <>
      <div className={styles.projectHeader}>
        <h1 className="visually-hidden">Artworks</h1>
      </div>
      {artworks && (
        <Grid items={artworks.map(({ node }) => node)} type="artwork" />
      )}
    </>
  );
};

export { ArtworksPage };
