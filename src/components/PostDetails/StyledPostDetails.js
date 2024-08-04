import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledPostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  margin: 20px;
  box-sizing: border-box;
`;

export const StyledPostDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: transparent;

  & > h1 {
    font-size: 15px;
    font-weight: 700;
    color: #000000;
    padding: 10px;
    margin-top: 20px;
    text-align: left;
    background-color: transparent;
    border: 1px solid ${colors.greyBlue};
    border-radius: 5px;
  }

  & > p {
    font-size: 12px;
    font-weight: 400;
    color: #000000;
    padding: 10px;
    margin-top: 20px;
    text-align: left;
    background-color: transparent;
  }
`;
