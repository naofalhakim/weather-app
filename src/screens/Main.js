import React from "react";
import WeatherLanding from "./WeatherLanding";

import { Switch, Route } from "react-router-dom";

export const Main = () => {
  return (
    <Switch>
      <Route from="/" path={"weather-landing"}>
        <WeatherLanding />
      </Route>
      <Route path="/weather/:id">
        <WeatherLanding path={"weather-landing"} />
        {/* <WeatherDetailDay /> */}
      </Route>
      <Route path={"/"}>
        <WeatherLanding />
      </Route>
    </Switch>
  );
};
