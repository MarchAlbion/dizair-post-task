import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledToggleContainer = styled.section`
  wdith: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-color: transparent;
`;

export const StyledToggleOption = styled.div`
  background-color: transparent;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: center;
  height: 100%;
  position: relative;
  padding: 10px 0px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: ${colors.greyBlue};
    bottom: 0;
    left: 50%;
    transform-origin: bottom left;
    transform: ${({ $isActive }) =>
      $isActive ? "translateX(-50%)" : "translateX(-50%) scaleX(0)"};
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    transition: transform 0.3s ease, opacity 0.3s ease;
    border-radius: 2px;
  }
`;
