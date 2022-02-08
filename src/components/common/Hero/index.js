import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./Hero.module.scss";

const Hero = ({ image, alt }) => {
  return (
    <GatsbyImage
      className={styles.hero}
      image={image}
      // aspectRatio={16 / 3}
      alt={alt}
      objectFit="contain"
      objectPosition="left"
    />
  );
};

export { Hero };
