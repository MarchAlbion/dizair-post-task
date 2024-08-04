import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 5px;
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    object-fit: cover;
  }
`;

export const StyledInfoContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 14px;
  margin-top: 10px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;

export const StyledInfo = styled.div`
  font-family: Poppins;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: center;
  font-weight: ${(props) => props.$weight};
`;

export const StyledProfileСontainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0px 45px;
  position: relative;
  gap: 10px;

  #profile-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
`;

export const StyledNickname = styled.div`
  font-weight: 700;
`;
export const StyledInfoDescription = styled.p`
  color: ${colors.secondaryFontColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: center;
  word-break: break-all;
`;

export const StyledProfileButton = styled.button`
  font-size: 12px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: ${colors.blue};
  color: white;
  box-shadow: 0px 10px 20px 0px #5790df80;
  min-width: 120px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: white;
    color: black;
    box-shadow: 0px 10px 20px 0px #00000040;
  }
`;
