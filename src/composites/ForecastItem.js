import React, { useState } from "react";
import { AdditionalInfo, WeatherBox } from "../components/ContainerComponent";
import { Icon } from "../components/IconComponent";
import {
  CaptionText,
  SubTitleText,
  TitleText,
} from "../components/TextComponent";

const ForecastItem = ({
  data: { time, day, temp, description, icon, humidity, wind },
  hourlyData = [],
}) => {
  const [hourlyVisible, setHourlyVisible] = useState(false);
  return (
    <WeatherBox onClick={() => setHourlyVisible(!hourlyVisible)}>
      <TitleText>{day}</TitleText>
      <SubTitleText>{time}</SubTitleText>
      <Icon
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt={description}
      ></Icon>
      <TitleText>{temp + " "}&deg;F</TitleText>
      <AdditionalInfo>
        <CaptionText>{"Humidty: "}</CaptionText>
        <CaptionText>{humidity}</CaptionText>
      </AdditionalInfo>
      <AdditionalInfo>
        <CaptionText>{"Wind Speed: "}</CaptionText>
        <CaptionText>{wind}</CaptionText>
      </AdditionalInfo>
      <CaptionText>{description}</CaptionText>
      
      {hourlyVisible ? (
        <div
          onClick={() => setHourlyVisible(!hourlyVisible)}
          style={{
            position: "fixed",
            backgroundColor: "white",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 20,
            padding: "2rem",
            overflowY: "scroll",
          }}
        >
          <div
            onClick={() => setHourlyVisible(!hourlyVisible)}
            style={{
              backgroundColor: "#4040AA",
              padding: ".5rem",
              display: "flex",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <table style={{ textAlign: "left", border: "1px solid #FFFFFF" }}>
              <tr>
                <td>Time</td>
                <td>Temperature &deg;F</td>
                <td>Humidity</td>
                <td>Wind Speed</td>
                <td>Description</td>
              </tr>
              {hourlyData.map(
                ({ time, temp, humidity, wind, description, icon }) => (
                  <tr>
                    <td>{time}</td>
                    <td>{temp}</td>
                    <td>{humidity}</td>
                    <td>{wind}</td>
                    <td>
                      <Icon
                        src={`http://openweathermap.org/img/wn/${icon}.png`}
                        alt={description}
                        width={"2rem"}
                        height={"2rem"}
                      ></Icon>
                      <CaptionText>{description}</CaptionText>
                    </td>
                  </tr>
                )
              )}
            </table>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </WeatherBox>
  );
};

export default ForecastItem;
