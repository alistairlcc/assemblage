import React, { useState, useEffect } from "react";
import * as styles from "./Giphy.module.scss";

const Giphy = ({ url, width, height }) => {
  const embedPrefix = "https://giphy.com/embed/";
  const splitUrl = url.replace(/\/$/, "").split("/");
  const lastHandle = splitUrl[splitUrl.length - 1];
  const giphyUrl = `${embedPrefix}/${lastHandle}`;

  const [pt, setPt] = useState("56.25%");

  useEffect(() => {
    if (width && height) {
      setPt(`${Math.ceil((height / width) * 100)}%`);
    }
  }, []);

  if (url.includes("iframe")) return null;
  return (
    <>
      <div
        className={styles.giphy}
        style={{
          paddingBottom: `${pt}`,
        }}
      >
        <iframe
          title="giphy"
          src={giphyUrl}
          allowFullScreen
          frameBorder={0}
        ></iframe>
      </div>
    </>
  );
};

export { Giphy };
