import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Header from "../components/Header";
import Home from "./Home";
import Post from "./Post";
import View from "./View";
import Setting from "./Setting";
import Profile from "./Profile";

function Main(props) {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <Header url={url} />
      <main>
        <div className="container">
          <Switch>
            <Route exact path={`${path}`} component={Home} />
            <Route exact path={`${path}/post`} component={Post} />
            <Route exact path={`${path}/setting`} component={Setting} />
            <Route exact path={`${path}/profile`} component={Profile} />
            <Route exact path={`${path}/:postid`} component={View} />
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default Main;
