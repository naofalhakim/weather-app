import styled from "styled-components";
import { device } from "../shared/size";

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


export { AdditionalInfo, WeatherBox, WeatherContainer}