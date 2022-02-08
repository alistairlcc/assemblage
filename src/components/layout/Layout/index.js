import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import classNames from "classnames";

import * as styles from "./Layout.module.scss";

const Layout = ({ children, location }) => {
  // const fullLayout = location.pathname !== "/";
  const fullLayout = true;
  const cls = classNames(
    { [styles.main]: fullLayout },
    { [styles.home]: !fullLayout }
  );
  return (
    <>
      {fullLayout && <Header location={location} />}
      <main className={cls}>{children}</main>
      {fullLayout && <Footer location={location} />}
    </>
  );
};

export default Layout;
