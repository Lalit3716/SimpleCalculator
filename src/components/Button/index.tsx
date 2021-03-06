import React, { ReactElement } from "react";
import useTheme from "../../hooks/useTheme";
import styles from "./Button.module.css";

interface Props {
  value: string;
  faIcon?: string;
  color?: string;
  operator?: boolean;
  onClick?: (value: string) => void;
}

const Button: React.FC<Props> = ({
  value,
  faIcon,
  color,
  operator,
  onClick,
}) => {
  let _color = operator ? "orange" : color;
  const { darkMode } = useTheme();

  return (
    <button
      className={`${styles.btn} ${darkMode ? styles.dark : styles.light}`}
      style={{
        color: _color,
      }}
      onClick={() => (onClick ? onClick(value) : null)}
    >
      {faIcon ? <i className={faIcon} /> : value}
    </button>
  );
};

export default Button;
