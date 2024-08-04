import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0px 10px;
  background-color: transparent;

    @media screen and (min-width: 768px) {
    padding: 0 50px;
  }


  @media screen and (min-width: 1024px) {
    padding: 0 200px;
  }
`;