import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  getDataCity,
  getDataForcast,
  getDataHourly,
  getIsLoading,
} from "../redux/selector";
import { getForcastData } from "../redux/action";

import { device } from "../shared/size";
import {
  CaptionText,
  LocationText,
  TitleHeader,
} from "../components/TextComponent";
import { HeaderContainer } from "../components/HeaderComponent";
import ForecastContent from "../composites/ForecastContent";

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

class WeatherLanding extends React.Component {
  constructor(props) {
    super(props);
    this.intervalID = "";
    this.location = "Indonesia, Jakarta";
  }

  componentDidMount() {
    this.props.getForcastData();
    this.intervalID = setInterval(() => this.props.getForcastData(), 300000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <Page>
        <HeaderContainer>
          <TitleHeader>5 Forecast Days</TitleHeader>
        </HeaderContainer>

        <LocationText>{`${this.props.city.name}, ${this.props.city.country}`}</LocationText>
        <ForecastContent
          data={this.props.dataForcast}
          hourlyForecast={this.props.dataForcastHourly}
          isLoading={this.props.isLoading}
        />
        <CaptionText>Last update at :{" " + new Date().toString()}</CaptionText>
      </Page>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataForcast: getDataForcast(state),
    city: getDataCity(state),
    dataForcastHourly: getDataHourly(state),
    isLoading: getIsLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getForcastData: (params) => dispatch(getForcastData(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherLanding);
