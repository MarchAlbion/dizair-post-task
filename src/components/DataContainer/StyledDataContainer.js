import styled from "styled-components";

import { colors } from "../../styles/colors";

export const StyledDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  margin-top: 12px;

  :hover {
    cursor: pointer;
  }
`;

export const StyledUser = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  background-color: transparent;
  width: 100%;
  gap: 10px;

  #name {
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: left;
    background-color: white;
  }
  #username {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: left;
    background-color: white;
    color: ${colors.secondaryFontColor};
  }

  & > img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
