import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import * as styles from "./SessionList.module.scss";

const SessionList = ({ list, setPlaces, setAll }) =>
  list.map(({ node }, index) => {
    console.log(node);
    const date = node.startDate ? new Date(node.startDate).getFullYear() : null;
    const image = node.mainImage?.asset?.gatsbyImageData;
    return (
      <Link
        key={index}
        to={`/sessions/${node.slug.current}`}
        className={styles.bioItem}
        onMouseEnter={() => {
          if (node.location) {
            setPlaces([
              {
                name: node.title,
                longitude: node.location?.lng,
                latitude: node.location?.lat,
              },
            ]);
            setAll(false);
          }
        }}
      >
        <article>
          <div className={styles.image}>
            <GatsbyImage
              className={styles.image}
              image={image}
              // aspectRatio={16 / 3}
              alt={node.title}
              objectFit="cover"
              objectPosition="left"
            />
          </div>
          <h3 className={styles.title}>{node.title}</h3>
        </article>
      </Link>
    );
  });

export { SessionList };
