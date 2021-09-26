import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import page components here
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import ContactPage from "./page/ContactPage";


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
