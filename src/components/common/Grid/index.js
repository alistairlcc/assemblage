import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import classNames from "classnames";
import * as styles from "./Grid.module.scss";

const Grid = ({ items, type }) => {
  return (
    <div>
      {/* <button onClick={() => setSimple(!simple)}>
        {simple ? "show images" : "text only"}
      </button> */}
      <section className={styles.grid}>
        {items &&
          items.map((item, index) => {
            if (item?.artwork) {
              return (
                <article className={styles.gridItem} key={index}>
                  <Link key={index} to={`/${type}/${item.slug.current}`}>
                    <figure>
                      <GatsbyImage
                        image={item.mainImage.asset.gatsbyImageData}
                        // aspectRatio={16 / 3}
                        // remove alt as caption provides it
                        alt=""
                      />
                      <figcaption className={styles.title}>
                        {item.shortTitle || item.title}
                      </figcaption>
                    </figure>
                  </Link>
                </article>
              );
            }
          })}
      </section>
    </div>
  );
};

export { Grid };
