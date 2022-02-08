import React from "react";
import { Link } from "gatsby";
import * as styles from "./SessionList.module.scss";

const SessionList = ({ list, setPlaces, setAll }) =>
  list.map(({ node }, index) => {
    const date = node.startDate ? new Date(node.startDate).getFullYear() : null;
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
          <div className={styles.date}>{date}</div>
          <h3 className={styles.title}>{node.title}</h3>
        </article>
      </Link>
    );
  });

export { SessionList };
