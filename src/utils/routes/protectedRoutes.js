import React from "react";
import { Redirect, Route } from "react-router-dom";
function ProtectedRoute({ component: Component, ...restOfProps }) {
  let isAuthenticated = localStorage.getItem("isAuthenticated");
  isAuthenticated = "true";
  console.log(isAuthenticated);
  console.log(Boolean(isAuthenticated));
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated === "true" ? (
          // isAuthenticated !== "true" ? (
          // <Layout>
          <Component {...props} />
        ) : (
          // </Layout>
          <Redirect to="/" />
          // <Component {...props} />
        )
      }
    />
  );
}

export default ProtectedRoute;
