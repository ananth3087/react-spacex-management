import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/templates/Layout/Layout";
import Home from "./components/pages/Home/Home";
import Error from "./components/pages/Error/Error";

const Routes = () => {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Switch>
          <Route path={"/"} exact={true} component={Home} />
          <Route render={() => <Error category="page-not-found" />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
