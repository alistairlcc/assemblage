import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

import * as styles from "./Vimeo.module.scss";

const Vimeo = ({ url, autoplay }) => {
  const [pt, setPt] = useState("56.25%");
  // const [vidWidth, setVidWidth] = useState("100%");
  // const [vidHeight, setVidHeight] = useState("100%");
  const vidWidth = "100%";
  const vidHeight = "100%";

  useEffect(() => {
    fetch(`https://vimeo.com/api/oembed.json?url=${url}`)
      .then((resp) => resp.json())
      .then(({ width, height }) => {
        if (width && height) {
          // if (width < height) {
          // setVidWidth(`${Math.ceil((width / height) * 100)}%`);
          // } else {
          setPt(`${Math.ceil((height / width) * 100)}%`);
          // }
        }
      });
  }, [url]);

  return (
    <div
      className={styles.video}
      style={{
        paddingBottom: `${pt}`,
      }}
    >
      <ReactPlayer
        url={url}
        width={vidWidth}
        height={vidHeight}
        controls={!autoplay}
        loop={autoplay}
        playing={autoplay}
        muted={autoplay}
      />{" "}
    </div>
  );
};

export { Vimeo };

// const [pt, setPt] = useState("56.25%");
// const [vidWidth, setVidWidth] = useState("100%");
// const [vidHeight, setVidHeight] = useState("100%");

// // const [vimWidth, setVimWidth] = useState(0);
// // const [vimHeight, setVimHeight] = useState(0);
// const [windowHeight, setWindowHeight] = useState(0);
// const [headerHeight, setHeaderHeight] = useState(0);
// const [footerHeight, setFooterHeight] = useState(0);

// useEffect(() => {
//   fetch(`https://vimeo.com/api/oembed.json?url=${url}`)
//     .then((resp) => resp.json())
//     .then(({ width, height }) => {
//       if (width && height) {
//         if (width < height) {
//           setWindowHeight(window.innerHeight);
//           setHeaderHeight(
//             getComputedStyle(document.documentElement).getPropertyValue(
//               "--header-height"
//             )
//           );
//           setFooterHeight(
//             getComputedStyle(document.documentElement).getPropertyValue(
//               "--footer-height"
//             )
//           );
//           if (windowHeight - footerHeight - headerHeight < height) {
//             setVidHeight(
//               `cal(${windowHeight}px - ${footerHeight} - ${headerHeight} - env(safe-area-inset-bottom))`
//             );
//           }
//           setVidWidth(`${Math.ceil((width / height) * 100)}%`);
//           setPt(`calc(100vh - var(--header-height) - var(--footer-height))`);
//         } else {
//           setPt(`${Math.ceil((height / width) * 100)}%`);
//         }
//       }
//       const updateWindowDimensions = () => {
//         // setVimWidth(window.innerWidth);
//         setWindowHeight(window.innerHeight);

//         setHeaderHeight(
//           getComputedStyle(document.documentElement).getPropertyValue(
//             "--header-height"
//           )
//         );
//         setFooterHeight(
//           getComputedStyle(document.documentElement).getPropertyValue(
//             "--footer-height"
//           )
//         );

//         // container
//       };

//       window.addEventListener("load resize", updateWindowDimensions);

//       return () => {
//         window.removeEventListener("load resize", updateWindowDimensions);
//       };

//     });
// }, [url]);
