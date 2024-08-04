import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledNavBar = styled.nav`
  display: flex;
  justify-content: ${(props) =>
    props.$isdetails ? "space-between" : "flex-end"};
  align-items: center;
  width: 100%;
  background-color: transparent;

  & .nav-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: ${colors.background};
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    & img {
      transition: all 0.2s ease-in-out;
      background-color: transparent;
    }

    &:hover {
      background-color: ${colors.backgroundHover};

      & img {
        transform: scale(1.1);
      }
    }
  }
`;
