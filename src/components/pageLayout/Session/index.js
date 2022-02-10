import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Loadable from "@loadable/component";
import { Hero } from "../../common/Hero";
import { BlockContent } from "../../common/BlockContent";
import { ImageMediaGrid } from "../../common/ImageMediaGrid";

import { Grid } from "../../common/Grid";

import { Map } from "../../common/Map";
import { ClientOnly } from "../../common/ClientOnly";

import * as styles from "./Session.module.scss";

// const Map = Loadable(async () => (await import("../../common/Map")).Map, {
//   fallback: (
//     <>
//       <div className={styles.loader}>
//         <div>Loading map...</div>
//       </div>
//     </>
//   ),
// });

const Session = ({ session }) => {
  console.log("session", session);

  const startDate = session.startDate ? new Date(session.startDate) : null;
  const startDateString = startDate
    ? startDate.toLocaleString("default", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const endDate = session.endDate ? new Date(session.endDate) : null;
  const endDateString = endDate
    ? endDate.toLocaleString("default", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <article>
      {session.mainImage && (
        <Hero image={session.mainImage.asset.gatsbyImageData} alt="" />
      )}
      <h1>{session.title}</h1>
      <div className={styles.info}>
        {session._rawDescription && (
          <section className={styles.description}>
            <BlockContent blocks={session._rawDescription || []} />
          </section>
        )}
        <section className={styles.details}>
          {startDateString && (
            <h3 className={styles.date}>
              {startDateString}
              {endDateString && <> - {endDateString}</>}
            </h3>
          )}
          {session.links.length > 0 && (
            <>
              <h3>Links</h3>
              {session.links.map((link, index) => (
                <div className={styles.link} key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                  >
                    {link.title}
                  </a>
                </div>
              ))}
            </>
          )}
          {session.downloads.length > 0 && (
            <>
              <h3>Downloads</h3>
              {session.downloads.map((download, index) => (
                <div className={styles.link} key={index}>
                  <a
                    href={download.asset.url}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                  >
                    {download.title && download.title}
                    {download.description && (
                      <>
                        <br />
                        {download.description}
                      </>
                    )}
                  </a>
                </div>
              ))}
            </>
          )}
        </section>
      </div>

      {session.artworks && (
        <section>
          <ImageMediaGrid items={session.artworks} defaultAlt={session.title} />
        </section>
      )}

      {session.location && (
        <Map
          places={[
            {
              name: session.title,
              longitude: session.location.lng,
              latitude: session.location.lat,
            },
          ]}
          className={styles.map}
        />
      )}

      {session.relatedArtworks.length > 0 && (
        <section className={styles.relatedArtworks}>
          <h3>Related Artworks</h3>
          <Grid
            items={session.relatedArtworks.map((item) => item.artwork)}
            type="artwork"
          />
        </section>
      )}
    </article>
  );
};

export { Session };
