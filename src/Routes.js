import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import Dashboard from "./containers/DashBoard";
import MintVest from "./containers/MintVest";
import ClientPortal from "./containers/ClientPortal";
import Finapp from "./containers/Finapp";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute
      path="/DashBoard"
      exact
      component={Finapp}
      props={childProps}
    />
    <AppliedRoute
      path="/ClientPortal"
      exact
      component={ClientPortal}
      props={childProps}
    />
    <AppliedRoute
      path="/MintVest"
      exact
      component={MintVest}
      props={childProps}
    />
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
