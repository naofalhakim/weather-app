import { WEATHER_URL } from "../shared/urls";
import { GET_FORCAST_DATA } from "./action-type";
import { fetchActionTemplate } from "./helper";

export const getForcastData = (params) => async (dispatch) => {
  return await fetchActionTemplate()(GET_FORCAST_DATA, dispatch, {
    url: WEATHER_URL.FORECAST,
    params,
  });
};
