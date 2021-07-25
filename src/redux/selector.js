import {
  get,
  // map, values
} from "lodash";
import { createSelector } from "reselect";

//form
const forecastData = (state) =>
  get(state, "forecast.forecastData.data.listForecast", []);
const forecastDataCity = (state) =>
  get(state, "forecast.forecastData.data.city", []);
const forecastDataHourly = (state) =>
  get(state, "forecast.forecastData.data.listHourly", []);

export const getDataForcast = createSelector([forecastData], (items) => items);
export const getDataCity = createSelector([forecastDataCity], (items) => items);
export const getDataHourly = createSelector([forecastDataHourly], (items) => items);
