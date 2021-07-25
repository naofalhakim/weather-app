import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getDataCity, getDataForcast, getDataHourly } from "../redux/selector";
import { getForcastData } from "../redux/action";

import { device } from "../shared/size";
import {
  CaptionText,
  LocationText,
  SubTitleText,
  TitleHeader,
  TitleText,
} from "../components/TextComponent";
import { Icon } from "../components/IconComponent";

const Page = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  margin: 0 auto;
  text-align: center;

  @media ${device.mobileL} {
    max-width: 700px;
  }

  @media ${device.tablet} {
    max-width: 900px;
  }

  @media ${device.laptop} {
    max-width: 1500px;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  text-align: center;
  background-color: ${(props) => props.backgroundColor || "#00000010"};
`;

const WeatherContainer = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  background-color: #00000010;

  @media ${device.mobileL} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const WeatherBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.active ? "1rem" : ".1rem")};
  border: ${(props) =>
    props.active ? "#0FF0F0A0 solid 1px" : "#000000A0 solid 1px"};
  display: ${(props) => (props.active ? "inline-flex" : "inherit")};
  align-items: center;
  margin: 0 12px;

  @media ${device.mobileL} {
    flex-direction: column;
    margin: 1rem 12px;
    flex: 0.3;
  }

  @media ${device.tablet} {
    flex-direction: column;
    margin: 0.5rem 12px;
    flex: 0.5;
  }
`;

const AdditionalInfo = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

class WeatherLanding extends React.Component {
  constructor(props) {
    super(props);

    this.location = "Indonesia, Jakarta";
  }

  componentDidMount() {
    this.props.getForcastData();
  }

  render() {
    return (
      <Page>
        <HeaderContainer>
          <TitleHeader>5 Forecast Days</TitleHeader>
        </HeaderContainer>

        <LocationText>{`${this.props.city.name}, ${this.props.city.country}`}</LocationText>
        <WeatherContainer>
          {this.props.dataForcast.map(
            ({ time, day, temp, description, icon, humidity, wind }) => (
              <WeatherBox>
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
              </WeatherBox>
            )
          )}
        </WeatherContainer>
      </Page>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataForcast: getDataForcast(state),
    city: getDataCity(state),
    dataForcastHourly: getDataHourly(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getForcastData: (params) => dispatch(getForcastData(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherLanding);
