import { combineReducers } from "redux";
import { GET_FORCAST_DATA, RESET_STATE } from "./action-type";
import { reducerTemplate } from "./helper";
import { forcastDataMapper } from "./mapper";

const initialState = {
  isLoading: false,
  errorMsg: null,
  data: [],
};

const forecastDataReducer = reducerTemplate(
  GET_FORCAST_DATA,
  forcastDataMapper
);

const forcastSubReducers = combineReducers({
  forecastData: forecastDataReducer,
});

const _resetState = (state, keys) => {
  keys = keys ? keys : Object.keys(state);
  keys.forEach((key) => {
    state[key] = initialState;
  });
  return state;
};

const forcastReducer = (state, action) => {
  if (action.type === RESET_STATE) {
    state = _resetState(state, action.payload);
  }
  return forcastSubReducers(state, action);
};

export default forcastReducer;
