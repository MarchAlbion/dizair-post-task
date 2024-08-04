import styled from "styled-components";

export const StyledPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: transparent;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    max-width: 500px;
  }

  & > div {
    font-size: 20px;
    font-weight: 400;
    color: #000000;
    padding: 10px;
    margin : 10px 0px;
    text-align: center;
    background-color: transparent;
  }
`;