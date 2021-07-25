import styled from "styled-components";

const TitleHeader = styled.h1`
  color: #000000;
`;

const TitleText = styled.p`
  color: #000000;
  font-size: 1.5rem;
  display: contents;
`;

const SubTitleText = styled.p`
  color: #000000a0;
  font-size: 1rem;
`;

const CaptionText = styled.p`
  color: #000000;
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const LocationText = styled.p`
  color: ${(props) => props.color || "#000000a0"};
  font-size: 1rem;
  font-weight: bold;
`;

export { CaptionText, SubTitleText, TitleText, TitleHeader, LocationText };
