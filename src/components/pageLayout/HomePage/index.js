import React from "react";
import { Link } from "gatsby";
import loadable from "@loadable/component";

// import { BackgroundVideo } from "./BackgroundVideo";

import * as styles from "./HomePage.module.scss";

const HomePage = () => {
  const BackgroundVideo = loadable(() => import("./BackgroundVideo"), {
    fallback: <div className="visually-hidden">loading background</div>,
  });
  return (
    <>
      <div className={styles.home}>
        <h1 className="visually-hidden">Assemblage</h1>
        <div className={styles.homeInfo}>
          <p>
            From A to B, left to right, corner to plane, on screen to off
            screen; things require movement and mechanism, from one position to
            another. GMD lecturers Deborah and Alistair in their practice often
            use the observation of phenomena, and the creation of assemblage(s)
            in their work. These practice-based sessions invite you to be part
            of their studio work, experimenting with methods of cause and effect
            and chain reactions.
          </p>
          <h2>
            Assemblage is a Lab project for BA Graphic Media and Design at the
            London College of Communication, University of the Arts London
          </h2>
        </div>
      </div>
      {/* <BackgroundVideo /> */}
    </>
  );
};

export { HomePage };
