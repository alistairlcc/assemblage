import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Hero } from "../../common/Hero";
import { BlockContent } from "../../common/BlockContent";
import { ImageMediaGrid } from "../../common/ImageMediaGrid";

import { MediaEmbed } from "../../common/MediaEmbed";

import * as styles from "./Artwork.module.scss";

const Artwork = ({ artwork }) => {
  const date = artwork.artworkDate
    ? new Date(artwork.artworkDate).getFullYear()
    : null;

  const width = artwork.dimensions ? artwork.dimensions.width || null : null;
  const depth = artwork.dimensions ? artwork.dimensions.depth || null : null;
  const height = artwork.dimensions ? artwork.dimensions.height || null : null;
  const units = artwork.dimensions ? artwork.dimensions.units || null : null;

  const dims = width || depth || height ? true : null;

  return (
    <article>
      <Hero image={artwork.mainImage.asset.gatsbyImageData} alt="" />
      <h1>{artwork.title}</h1>
      <div className={styles.info}>
        <section className={styles.details}>
          {date && <h3 className={styles.date}>{date}</h3>}
          <div className={styles.material}>{artwork.material}</div>
          <div className={styles.dimensions}>
            {width && (
              <>
                {width}
                {units}
              </>
            )}
            {depth && (
              <>
                {" x "}
                {depth}
                {units}
              </>
            )}
            {height && (
              <>
                {" x "}
                {height}
                {units}
              </>
            )}
            {dims && (
              <>
                {" "}
                ({width && <>w</>} x {depth && <>d</>} x {height && <>h</>})
              </>
            )}
          </div>
        </section>
        <section className={styles.description}>
          <BlockContent blocks={artwork._rawDescription || []} />
        </section>
      </div>

      <section>
        <ImageMediaGrid items={artwork.artworks} defaultAlt={artwork.title} />
      </section>
    </article>
  );
};

export { Artwork };
