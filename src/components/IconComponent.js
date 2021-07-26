import styled from "styled-components";

const Icon = styled.img`
  background-color: ${(props) => props.backgroundColor || "#aFFaaa"};
  border-radius: 5rem;
  padding: 0.5rem;
  width: ${(props) => props.width || "8rem"};
  height: ${(props) => props.height || "8rem"};
  margin-bottom: 0.5rem;
`;

export { Icon };
