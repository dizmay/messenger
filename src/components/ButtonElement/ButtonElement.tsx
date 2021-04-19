import React from "react";
import styles from "./ButtonElement.module.scss";

interface iProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  icon?: React.ReactNode;
  handleClick?: () => void;
}

const ButtonElement: React.FC<iProps> = ({
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

export default ButtonElement;
