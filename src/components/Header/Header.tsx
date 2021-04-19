import React from "react";
import { Link } from "react-router-dom";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { TiThMenu } from "react-icons/ti";
import ButtonElement from "../ButtonElement/ButtonElement";
import styles from "./Header.module.scss";

interface iProps {
  handleClick?: () => void
  isLogged: boolean | null
  logoutUser: () => void
}

const Header: React.FC<iProps> = ({ handleClick, isLogged, logoutUser }) => {
  return (
    <div className={styles.header}>
      <ButtonElement
        icon={<TiThMenu />}
        children="Menu"
        handleClick={handleClick}
      />
      <Link to="/">
        <h1>logo</h1>
      </Link>
      {
        isLogged
          ? <ButtonElement icon={<BiLogOutCircle />} children="Logout" handleClick={logoutUser} />
          : (
            <Link to="/auth/login">
              <ButtonElement icon={<BiLogInCircle />} children="Login" />
            </Link>
          )
      }
    </div>
  );
};

export default Header;
