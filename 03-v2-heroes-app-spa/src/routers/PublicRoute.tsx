import React from "react";
import PropTypes from 'prop-types';

import { Redirect, Route } from "react-router-dom";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      component={(props: JSX.IntrinsicAttributes) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

/* 
PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
} */