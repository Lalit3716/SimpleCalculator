import React, { useState } from "react";
import Button from "../Button";
import Preview from "../Preview";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: string) => {
    const newExpression = expression + value;
    setExpression(newExpression);
    if (!isNaN(Number(value))) setResult(eval(newExpression).toString());
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  const handleDelete = () => {
    const newExpression = expression.slice(0, -1);
    setExpression(newExpression);
    if (result) {
      if (!isNaN(Number(newExpression[newExpression.length - 1])))
        setResult(eval(newExpression).toString());
    }
  };

  const handleEqual = () => {
    setExpression(result.toString());
    setResult("");
  };

  const handlePercent = () => {
    if (!expression) return;
    const newExpression = expression + "*0.01";
    setExpression(newExpression);
    setResult(eval(newExpression).toString());
  };

  return (
    <div className={styles.grid}>
      <Preview
        primary={expression || "0"}
        secondary={expression ? result : ""}
      />
      <Button value="AC" color="red" onClick={handleClear} />
      <Button
        faIcon="fa-solid fa-delete-left"
        value="delete"
        operator
        onClick={handleDelete}
      />
      <Button
        faIcon="fa-solid fa-percent"
        value="percent"
        operator
        onClick={handlePercent}
      />
      <Button
        faIcon="fa-solid fa-divide"
        value="/"
        operator
        onClick={handleClick}
      />
      <Button value="7" onClick={handleClick} />
      <Button value="8" onClick={handleClick} />
      <Button value="9" onClick={handleClick} />
      <Button
        faIcon="fa-solid fa-xmark"
        value="*"
        operator
        onClick={handleClick}
      />
      <Button value="4" onClick={handleClick} />
      <Button value="5" onClick={handleClick} />
      <Button value="6" onClick={handleClick} />
      <Button value="-" operator onClick={handleClick} />
      <Button value="1" onClick={handleClick} />
      <Button value="2" onClick={handleClick} />
      <Button value="3" onClick={handleClick} />
      <Button value="+" operator onClick={handleClick} />
      <Button value="π" onClick={handleClick} />
      <Button value="." onClick={handleClick} />
      <Button value="0" onClick={handleClick} />
      <Button value="=" color="#39cd38" onClick={handleEqual} />
    </div>
  );
};

export default Calculator;
