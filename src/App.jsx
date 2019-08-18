import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";
import CreateEvent from "./components/createEvent/createEvent";
import Register from "./components/register/register";
import NotFound from "./common/notfound";
import "./App.css";

function App() {
  return (
    <main className="container">
      <Switch>
        <Route path={`/create-event`} component={CreateEvent} />
        <Route path={`/register`} component={Register} />
        <Route path={`/home`} component={LandingPage} />
        <Route path={`/not-found`} component={NotFound} />
        <Redirect from={`/`} exact to={`/home`} />
        <Redirect to={`/not-found`} />
      </Switch>
    </main>
  );
}

export default App;
