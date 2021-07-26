import React from "react";
import { WeatherContainer } from "../components/ContainerComponent";
import { TitleText } from "../components/TextComponent";
import ForecastItem from "./ForecastItem";

const ForecastContent = ({
  data = [],
  isLoading = false,
  hourlyForecast = [],
}) => {
  return isLoading ? (
    <TitleText>{"Loading...."}</TitleText>
  ) : (
    <WeatherContainer>
      {data.map((item, index) => (
        <ForecastItem
          key={index + ""}
          data={item}
          hourlyData={hourlyForecast[index]}
        />
      ))}
    </WeatherContainer>
  );
};

export default ForecastContent;
