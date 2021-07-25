import { requestNew } from "../api";
import { get } from "lodash";

export const fetchActionTemplate = () => {
  return async (
    type,
    dispatch,
    { url, params, method = "GET" },
    mapperKey = ""
  ) => {
    dispatch({ type: type.pending });
    try {
      let response = await requestNew({ url, method, params });

      return dispatch({
        type: type.fulfilled,
        payload: mapperKey ? get(response.data, mapperKey) : response.data,
      });
    } catch (error) {
      return error.toString() === "Cancel"
        ? null
        : dispatch({ type: type.rejected, payload: error.message });
    }
  };
};

export const reducerTemplate = (type, mapperFunc, reset = false) => {
  return (
    state = {
      isLoading: false,
      errorMsg: null,
      data: [],
    },
    action
  ) => {
    const existingData = state.data;
    switch (action.type) {
      case type.pending:
        return {
          ...state,
          isLoading: true,
          errorMsg: null,
          data: reset ? [] : existingData,
        };

      case type.rejected:
        return {
          ...state,
          isLoading: false,
          errorMsg: action.payload,
          data: [],
        };

      case type.fulfilled:
        return {
          ...state,
          isLoading: false,
          errorMsg: null,
          data: mapperFunc
            ? mapperFunc(action.payload, existingData)
            : action.payload,
        };

      case type.reset:
        return {
          ...state,
          isLoading: false,
          errorMsg: null,
          data: [],
        };

      default:
        return state;
    }
  };
};
