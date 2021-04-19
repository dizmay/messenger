import React from "react";
import { Route, Redirect } from "react-router-dom";

interface iProps {
  component: React.ElementType;
  isLogged: boolean | null;
  path: string;
  redirect: string;
}

const ProtectedRoute: React.FC<iProps> = ({
  component: Component,
  isLogged,
  path,
  redirect,
  ...rest
}) => {
  return (
    <Route
      exact
      path={path}
      {...rest}
      render={(props) =>
        isLogged ? <Component {...props} /> : <Redirect to={redirect} />
      }
    />
  );
};

export default ProtectedRoute;
