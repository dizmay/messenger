import React, { useState } from "react";
import { Switch } from "react-router";
import HeaderContainer from "./components/Header/HeaderContainer";
import Menu from "./components/Menu/Menu";
import ProtectedRoute from "./utils/ProtectedRoute";
import RegistrationContainer from "./components/Auth/Registration/RegistrationContainer";
import LoginContainer from "./components/Auth/Login/LoginContainer";
import styles from "./App.module.scss";

interface IProps {
  isLogged: boolean | null
}

const App: React.FC<IProps> = ({ isLogged }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const showMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className={styles.app}>
      <HeaderContainer handleClick={showMenu} isLogged={isLogged} />
      <div>
        <Menu isMenuVisible={isMenuVisible} />
      </div>
      <Switch>
        <ProtectedRoute
          component={RegistrationContainer}
          path="/auth/registration"
          redirect="/"
          isLogged={!isLogged}
        />
        <ProtectedRoute
          component={LoginContainer}
          path="/auth/login"
          redirect="/"
          isLogged={!isLogged}
        />
      </Switch>
    </div>
  );
};

export default App;
