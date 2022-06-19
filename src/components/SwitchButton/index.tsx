import React, { useState } from "react";
import styles from "./SwitchButton.module.css";

interface Props {
  offIcon: string;
  onIcon: string;
  on?: boolean;
  toggle: () => void;
}

const SwitchButton: React.FC<Props> = ({ offIcon, onIcon, on, toggle }) => {
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={on ? styles.day : styles.night}>
        <i className={on ? onIcon : offIcon} />
      </div>
    </div>
  );
};

export default SwitchButton;
