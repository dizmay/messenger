import React from "react";
import cn from "classnames";
import styles from "./Menu.module.scss";

interface iProps {
  isMenuVisible: boolean;
}

const Menu: React.FC<iProps> = ({ isMenuVisible }) => {
  const menuStyles = cn(styles.menu, {
    [styles.active]: isMenuVisible,
  });

  return (
    <div>
      <div className={menuStyles} />
    </div>
  );
};

export default Menu;
