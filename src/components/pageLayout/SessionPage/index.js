import React, { useEffect, useState } from "react";
// import { Link } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";
import { SessionList } from "./SessionList";
import { Map } from "../../common/Map";

import * as styles from "./SessionPage.module.scss";

const SessionPage = ({ sessionPages }) => {
  const [places, setPlaces] = useState([]);
  const [all, setAll] = useState(true);
  const defaultPlaces = sessionPages
    .filter(({ node }) => node.location?.lng && node.location?.lat)
    .map(({ node }) => ({
      name: node.title,
      longitude: node.location?.lng,
      latitude: node.location?.lat,
    }));
  useEffect(() => {
    if (defaultPlaces) {
      setPlaces(defaultPlaces);
    } else {
      setPlaces([]);
    }
  }, []);

  const mapdata = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [125.6, 10.1],
    },
    properties: {
      name: "Cottage home",
      price: 249999,
      bedrooms: 2,
      bathrooms: 1,
    },
  };

  return (
    <>
      <div className={styles.projectHeader}>
        <h1 className="visually-hidden">Session</h1>
      </div>
      <section className={styles.introduction}>
        <p>
          From A to B, left to right, corner to plane, on screen to off screen;
          things require movement and mechanism, from one position to another.
          GMD lecturers Deborah and Alistair in their practice often use the
          observation of phenomena, and the creation of assemblage(s) in their
          work. These practice-based sessions invite you to be part of their
          studio work, experimenting with methods of cause and effect and chain
          reactions.
        </p>
      </section>

      <div className={styles.sessionWrapper}>
        <section className={styles.sessionList}>
          <section id="solo-exhibitions">
            <h2>Assemblage sessions:</h2>
            <SessionList
              list={sessionPages}
              setPlaces={setPlaces}
              setAll={setAll}
            />
          </section>
        </section>
      </div>
    </>
  );
};

export { SessionPage };
