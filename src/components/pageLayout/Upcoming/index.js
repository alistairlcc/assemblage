import React from "react";
import { Link } from "gatsby";
import * as styles from "./Upcoming.module.scss";

const Upcoming = ({ exhibitions }) => {
  var now = new Date();
  const upcoming = exhibitions.filter(({ node }) => {
    const date = node.endDate ? new Date(node.endDate) : null;
    return date > now;
  });

  if (upcoming.length === 0) return false;

  return (
    <section className={styles.upcomming}>
      <h3>Current and upcoming exhibitions:</h3>
      <div>
        {upcoming.map(({ node }, index) => {
          const date = node.startDate ? new Date(node.startDate) : null;
          const dateString = date
            ? date.toLocaleString("default", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : null;
          return (
            <Link to={`/biography/${node.slug.current}`} key={index}>
              <article>
                {/* <div className={styles.date}>{dateString}</div> */}
                <h3 className={styles.title}>{node.title}</h3>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export { Upcoming };
