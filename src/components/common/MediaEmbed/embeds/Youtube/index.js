import React from "react";
import ReactPlayer from "react-player/lazy";

import * as styles from "./Youtube.module.scss";

const Youtube = ({ url, width = "100%", height = "100%", autoplay }) => {
  return (
    <div className={styles.video}>
      <ReactPlayer
        controls={true}
        url={url}
        width={width}
        height={height}
        controls={!autoplay}
        loop={autoplay}
        playing={autoplay}
        muted={autoplay}
      />{" "}
    </div>
  );
};

export { Youtube };
