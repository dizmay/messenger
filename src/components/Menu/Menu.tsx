import React from "react";
import cn from "classnames";
import styles from "./Menu.module.scss";

interface IProps {
  isMenuVisible: boolean;
}

const Menu: React.FC<IProps> = ({ isMenuVisible }) => {
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
