import React, { useContext, useEffect } from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import { colorModes } from "../../../utils/common";
import { Context } from "../../../context/Context";

import * as styles from "./Header.module.scss";

const Header = ({ className, location }) => {
  const { colorMode, setColorMode } = useContext(Context);

  useEffect(() => {
    setColorMode(colorModes[0]);
  }, []);

  const link = location.pathname.split("/")[1];

  const cls = classNames({ [styles.darkMode]: !link });
  return (
    <header>
      <h2 id="mainmenulabel" className="visually-hidden">
        Main Menus
      </h2>
      <nav aria-labelledby="mainmenulabel" className={styles.nav}>
        <ul>
          <li className={styles.name}>
            <Link to="/" activeClassName="active">
              Assemblage
            </Link>
          </li>
          <li>
            <Link to="/sessions" activeClassName="active">
              sessions
            </Link>
          </li>
          <li>
            <Link to="/artwork" activeClassName="active">
              artwork
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
