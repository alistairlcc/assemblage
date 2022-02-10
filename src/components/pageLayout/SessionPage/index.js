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
          Each week <em>Assemblage</em> focuses on a different area, moving
          towards the final chain reaction.
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
