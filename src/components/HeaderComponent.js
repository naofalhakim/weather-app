import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  text-align: center;
  background-color: ${(props) => props.backgroundColor || "#00000010"};
`;



export {HeaderContainer};