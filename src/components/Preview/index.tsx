import React from "react";
import styles from "./Preview.module.css";

interface Props {
  primary: string;
  secondary?: string;
}

const Preview: React.FC<Props> = ({ primary, secondary }) => {
  return (
    <div className={styles.preview}>
      <span>{primary}</span>
      {secondary && <span className={styles.secondary}>{secondary}</span>}
    </div>
  );
};

export default Preview;
