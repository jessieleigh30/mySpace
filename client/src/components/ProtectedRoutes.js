import React from "react";
import { Route, Redirect, } from "react-router-dom";
import { AuthConsumer, } from "../providers/AuthProvider";

const ProtectedRoute = ({ component: Component, ...rest}) => {
  <Route
    {...rest}
    render={ props => (
      auth.authenticated ? 
      <Component {...props} />
      :
      <Redirect to={{
        pathname: "/login",
        state: {from: props.location, }
      }}
      />
    )}
  />
}

const ConnectedProtectedRoutes = ( props ) => (
  <AuthConsumer>
    { auth =>
      <ProtectedRoute {...props} auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedProtectedRoutes;