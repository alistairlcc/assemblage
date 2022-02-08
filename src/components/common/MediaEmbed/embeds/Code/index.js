import React from "react";

import * as styles from "./Code.module.scss";

const Code = ({ url }) => {
  const pt = "56.25%";
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
            title="code"
            width={codeWidth}
            height={codeHeight}
            src={url}
          ></iframe>
        </div>
      </div>
      <p>
        <a href={url} rel="noreferrer" target="_blank">
          {url}
        </a>
      </p>
    </>
  );
};

export { Code };
