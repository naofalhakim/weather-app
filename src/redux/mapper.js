import { get, set } from "lodash";
import moment from "moment";

const objectMapper = (item) => {
  let obj = {};
  set(obj, "dateTime", get(item, "dt_txt", new Date()));
  set(
    obj,
    "time",
    moment(new Date(get(item, "dt_txt", ""))).format("MMMM, DD YYYY - h:mm a")
  );
  set(obj, "day", moment(new Date(get(item, "dt_txt", ""))).format("dddd"));
  set(obj, "temp", get(item, "main.temp", "0"));
  set(obj, "pressure", get(item, "main.pressure", "0"));
  set(obj, "tempMin", get(item, "main.temp_min", "0"));
  set(obj, "tempMax", get(item, "main.temp_max", "0"));
  set(obj, "humidity", get(item, "main.humidity", "0"));
  set(obj, "icon", get(item, "weather[0].icon", "0"));
  set(obj, "description", get(item, "weather[0].description", "-"));
  set(obj, "wind", get(item, "wind.speed", 0));

  return obj;
};

const hourlyDataMapper = (list) => {
  let dateSign = get(list[0], "dateTime", "").split(" ")[0];
  let dateListHourly = [];
  let tempDay = [];
  list.forEach((element) => {
    if (dateSign === get(element, "dateTime", "").split(" ")[0]) {
      tempDay.push(element);
    } else {
      dateListHourly.push(tempDay);
      tempDay = [];
      tempDay.push(element);
      dateSign = get(element, "dateTime", "").split(" ")[0];
    }
  });

  dateListHourly.push(tempDay);

  return dateListHourly;
};

const selectingIndex = () => {
  let timeNow = new Date();

  if (timeNow >= 0 && timeNow <= 3) {
    return 0;
  } else if (timeNow > 3 && timeNow <= 6) {
    return 1;
  } else if (timeNow > 6 && timeNow <= 9) {
    return 2;
  } else if (timeNow > 9 && timeNow <= 12) {
    return 3;
  } else if (timeNow > 15 && timeNow <= 18) {
    return 4;
  } else if (timeNow > 18 && timeNow <= 21) {
    return 5;
  } else if (timeNow > 21 && timeNow <= 23) {
    return 6;
  }
};

export const forcastDataMapper = (fetchedData) => {
  let city = get(fetchedData, "city");
  let list = get(fetchedData, "list");

  let listForecast = [];
  let listMapped = [];

  list.map((item) => listMapped.push(objectMapper(item)));

  let listHourly = hourlyDataMapper(listMapped);

  if (listHourly.length > 5) {
    listHourly.pop();
  }

  listHourly.map((item) =>
    listForecast.push(item[selectingIndex()] || item[item.length - 1])
  );

  return { city, listForecast, listHourly };
};
