import styled, { css } from "styled-components";

export const PostDetailContainer = styled.div`
  margin-top: 100px;

  ${({ theme }) => theme.media.down("640px")} {
    margin-top: 30px;
  }
`;

export const BannerImage = styled.img(
  ({ theme: {} }) => css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0 64px;
  `
);
