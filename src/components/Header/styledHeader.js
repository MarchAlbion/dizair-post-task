import styled from "styled-components";
import backgroundImage from "../../assets/images/background.png";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;
  min-height: ${props => props.$isdetails ? "82px" : "195px"};
  box-sizing: border-box;
  transition: all 0.4s ease-in-out;
`;