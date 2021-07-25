import axios from "axios";
let baseURL = "https://api.openweathermap.org/data/2.5";

const baseInstance = axios.create({
  baseURL,
});

export const requestNew = async (args) => {
  if (args.method === "GET") {
    return baseInstance
      .request({
        ...args,
      })
      .catch();
  } else if (args.method === "POST") {
    return baseInstance.request({
      url: args.url,
      data: args.params,
      method: args.method,
    });
  }
};

export const createURLwithBase = (url) => baseURL + url;
