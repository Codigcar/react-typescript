import React from "react";
import PropTypes from 'prop-types';

import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}: any) => {

    // Obtener la ultima ruta visitada por el usuario si es que el token expira y lo saca de la aplicacion
    console.log(rest.location.pathname);
    localStorage.setItem('lastPath',rest.location.pathname);
    

  return (
    <Route
      {...rest}
      component={(props: JSX.IntrinsicAttributes) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

/* 
PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
} */