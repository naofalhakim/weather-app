import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import forcastReducer from "./reducer";

// Used Redux dev tools if installed
const composeEnhancer = compose;
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      forecast: forcastReducer,
    }),
    composeEnhancer(applyMiddleware(thunk))
  );
  return store;
};
