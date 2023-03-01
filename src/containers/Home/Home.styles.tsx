import styled, { css } from "styled-components";

export const HomeContainer = styled.div`
  margin-top: 100px;
`;

export const BannerImage = styled.img(
  ({ theme: {} }) => css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `
);
