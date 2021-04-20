import React from "react";
import styles from "./Button.module.scss";

interface IProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  icon?: React.ReactNode;
  handleClick?: () => void;
}

const Button: React.FC<IProps> = ({
  children,
  type,
  icon,
  handleClick,
}) => {
  return (
    <button
      type={type || "button"}
      className={styles.button}
      onClick={handleClick}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};

export default Button;
