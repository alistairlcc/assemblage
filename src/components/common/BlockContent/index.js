import BaseBlockContent from "@sanity/block-content-to-react";
import React from "react";
import clientConfig from "../../../client-config";
import serializers from "./serializers";
import * as styles from "./Blockcontent.module.scss";

console.log("style", styles.content);
const BlockContent = ({ blocks }) => (
  <BaseBlockContent
    className={styles.content}
    blocks={blocks}
    serializers={serializers}
    {...clientConfig.sanity}
  />
);

export { BlockContent };
