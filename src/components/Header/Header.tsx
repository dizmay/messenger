import React from "react";
import { Link } from "react-router-dom";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { TiThMenu } from "react-icons/ti";
import Button from "../Button/Button";
import styles from "./Header.module.scss";

interface IProps {
  handleClick?: () => void
  isLogged: boolean | null
  logoutUser: () => void
}

const Header: React.FC<IProps> = ({ handleClick, isLogged, logoutUser }) => {
  return (
    <div className={styles.header}>
      <Button
        icon={<TiThMenu />}
        children="Menu"
        handleClick={handleClick}
      />
      <Link to="/">
        <h1>logo</h1>
      </Link>
      {
        isLogged
          ? <Button icon={<BiLogOutCircle />} children="Logout" handleClick={logoutUser} />
          : (
            <Link to="/auth/login">
              <Button icon={<BiLogInCircle />} children="Login" />
            </Link>
          )
      }
    </div>
  );
};

export default Header;
