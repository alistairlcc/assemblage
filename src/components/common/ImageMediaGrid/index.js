import React from "react";
import { MediaEmbed } from "../MediaEmbed";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./ImageMediaGrid.module.scss";

const ImageMediaGrid = ({ items, defaultAlt }) => {
  return items.map((item, index) => {
    return (
      <div key={index} className={styles.grid}>
        {item.url && (
          <figure>
            <MediaEmbed mediaUrl={item.url} />
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        )}
        {item.asset && (
          <figure>
            <GatsbyImage
              image={item.asset.gatsbyImageData}
              // aspectRatio={16 / 3}
              alt={item.altText || item.caption || defaultAlt}
            />
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        )}
      </div>
    );
  });
};

export { ImageMediaGrid };
