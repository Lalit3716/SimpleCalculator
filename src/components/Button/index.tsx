import React, { ReactElement } from "react";
import styles from "./Button.module.css";

interface Props {
  value?: string;
  faIcon?: string;
  color?: string;
  operator?: boolean;
}

const Button: React.FC<Props> = ({ value, faIcon, color, operator }) => {
  let _color = operator ? "orange" : color;

  if (value) {
    return (
      <button className={styles.btn} style={{ color: _color }}>
        {value}
      </button>
    );
  }

  return (
    <button className={styles.btn} style={{ color: _color }}>
      <i className={faIcon} />
    </button>
  );
};

export default Button;
