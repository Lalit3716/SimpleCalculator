import React from "react";
import styles from "./Button.module.css";

interface Props {
  value: string;
}

const Button: React.FC<Props> = ({ value }) => {
  return <button className={styles.btn}>{value}</button>;
};

export default Button;
