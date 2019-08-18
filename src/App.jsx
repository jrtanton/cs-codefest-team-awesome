import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import CreateEvent from "./components/create-event/create-event";
import LandingPage from "./components/landingPage/landingPage";
import Register from "./components/register/register";
import Login from "./components/login/login";
import Events from "./components/events/events";
import NotFound from "./common/notfound";
import "./App.css";

function App() {
  return (
    <main className="container">
      <Switch>
        <Route path={`/create-event`} component={CreateEvent} />
        <Route path={`/register`} component={Register} />
        <Route path={`/login`} component={Login} />
        <Route path={`/events`} component={Events} />
        <Route path={`/home`} component={LandingPage} />
        <Route path={`/not-found`} component={NotFound} />
        <Redirect from={`/`} exact to={`/home`} />
        <Redirect to={`/not-found`} />
      </Switch>
    </main>
  );
}

export default App;
