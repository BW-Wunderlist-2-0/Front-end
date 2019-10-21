import React from "react";
import { Route, Redirect } from "react-router-dom";

//PrivateRoute rules:
// -- Has same API as <Route/>
// -- Renders a <Route /> and passes all thte props through it
// -- Checks if the user is authenticated and, if so, renders the compnent prop

// Renaming component to Component for successful render, then passing the remaining props in as '...rest'
const PrivateRoute = ({ component: Component, ...rest }) => {
  // const Component = props.component;
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
