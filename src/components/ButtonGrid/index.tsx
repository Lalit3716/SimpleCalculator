import React from "react";
import Button from "../Button";
import Preview from "../Preview";
import styles from "./Grid.module.css";

const ButtonGrid = () => {
  return (
    <div className={styles.grid}>
      <Preview primary="2+2" secondary="=4" />
      <Button value="AC" color="red" />
      <Button faIcon="fa-solid fa-delete-left" operator />
      <Button faIcon="fa-solid fa-percent" operator />
      <Button faIcon="fa-solid fa-divide" operator />
      <Button value="7" />
      <Button value="8" />
      <Button value="9" />
      <Button faIcon="fa-solid fa-xmark" operator />
      <Button value="6" />
      <Button value="5" />
      <Button value="4" />
      <Button value="-" operator />
      <Button value="3" />
      <Button value="2" />
      <Button value="1" />
      <Button value="+" operator />
      <Button value="π" />
      <Button value="." />
      <Button value="0" />
      <Button value="=" color="#39cd38" />
    </div>
  );
};

export default ButtonGrid;
