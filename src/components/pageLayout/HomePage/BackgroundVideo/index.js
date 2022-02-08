import React from "react";
// import ReactPlayer from "react-player/lazy";
import * as styles from "./BackgroundVideo.module.scss";

const BackgroundVideo = () => {
  return (
    <div className={styles.vimeoWrapper}>
      {/* <ReactPlayer
        // url="https://vimeo.com/597942332"
        url="https://vimeo.com/600924856/26bbb26a1f"
        width="100%"
        height="100vh"
        controls={false}
        loop={true}
        playing={true}
        muted={true}
        config={{
          vimeo: {
            background: true,
          },
        }}
      /> */}
      {/* raindrop: 600924856 */}
      <iframe
        src="https://www.youtube.com/embed/SXrTlo1ytE0?autoplay=1&mute=1"
        allowFullScreen="allowfullscreen"
        frameBorder="0"
        loading="lazy"
        title="background artwork video"
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
