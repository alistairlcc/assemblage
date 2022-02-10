import React from "react";

import * as styles from "./Footer.module.scss";

const Footer = ({ className, location }) => {
  const link = location.pathname.split("/")[1];

  if (!link) return false;

  return (
    <footer className={styles.footer}>
      <div>
        <p>
          All works © BA Graphic Media and Design students, unless otherwise
          stated. Images of other artworks are used for teaching purposes,
          copyright belongs to the orginal holder.
        </p>
        <p>
          <a href="https://gmdlcc.com" target="_blank" rel="noreferrer">
            BA Graphic and Media Design, London College of Communication,
            University of the Arts London
          </a>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
