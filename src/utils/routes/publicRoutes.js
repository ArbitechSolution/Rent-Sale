import React from "react";
import { Redirect, Route } from "react-router-dom";
function PublicRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        // isAuthenticated !== "true" ? (
        isAuthenticated === "true" ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PublicRoute;
