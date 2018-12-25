import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

export const Main = (
  <Switch>
    <Route path="/login" render={() => <Login />} />
    <Route path="/register" render={() => <Register />} />
  </Switch>
);
