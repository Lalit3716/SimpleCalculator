import React from "react";
import Button from "../Button";
import styles from "./Grid.module.css";

const ButtonGrid = () => {
  return (
    <div className={styles.grid}>
      <Button value="+" />
      <Button value="-" />
      <Button value="*" />
      <Button value="/" />
      <Button value="+" />
      <Button value="+" />
      <Button value="+" />
      <Button value="+" />
      <Button value="+" />
      <Button value="+" />
      <Button value="+" />
      <Button value="+" />
      <Button value="+" />
      <Button value="+" />
      <Button value="+" />
      <Button value="+" />
    </div>
  );
};

export default ButtonGrid;
