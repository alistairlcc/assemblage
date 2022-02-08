import React from "react";

import * as styles from "./Footer.module.scss";

const Footer = ({ className, location }) => {
  // console.log(location);
  const link = location.pathname.split("/")[1];

  if (!link) return false;

  return (
    <footer className={styles.footer}>
      <div>All works © GMD and GMD students.</div>
    </footer>
  );
};

export { Footer };
