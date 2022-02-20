import React from "react";

import * as styles from "./Padlet.module.scss";

const Padlet = ({ url }) => {
  console.log(url);
  const urlParams = new URLSearchParams(url);
  const width = urlParams.get("w");
  const height = urlParams.get("h");
  const percentage = width && height ? (height / width) * 100 : 100;
  const pt = `${percentage}%`;
  const codeWidth = "100%";
  const codeHeight = "100%";

  return (
    <>
      <div
        width={codeWidth}
        height={codeHeight}
        style={{
          paddingBottom: `${pt}`,
        }}
        className={styles.code}
      >
        <div>
          <iframe
            title="padlet"
            width={codeWidth}
            height={codeHeight}
            src={url}
            allow="fullscreen"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export { Padlet };
