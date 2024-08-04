import styled from "styled-components";

export const SinglePost = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.40799999237060547px;
  background-color: transparent;
  tex-align: left;
  margin-top: 12px;
  align-self: flex-start;
`;

export const SinglePhoto = styled.div`
  background-color: transparent;
  width: 100%;
  max-width: 500px;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    max-width: 500px;
  }
`;
