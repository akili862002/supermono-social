import styled, { css } from "styled-components";

export const SocialLayoutContainer = styled.div`
  padding: ${({ theme }) => theme.spacing["8"]};
  width: 60%;
`;

export const Title = styled.h1(
  ({ theme: { colors, spacing, fontSize, fontWeight } }) => css`
    font-style: normal;
    font-weight: ${fontWeight.bold};
    font-size: ${fontSize["5xl"]};
    line-height: 60px;
    color: ${colors.white};

    & > span {
      background-color: ${colors.purple};
    }
  `
);

export const Field = styled.div<{ size: "lg" | "md" }>(
  ({ size, theme: { fontWeight, fontSize } }) => css`
    font-weight: ${fontWeight.semibold};
    display: flex;
    flex-direction: row;
    align-items: center;

    ${size === "lg"
      ? css`
          font-size: ${fontSize["3xl"]};
        `
      : css`
          font-size: ${fontSize.base};
        `}
    & > svg {
      ${size === "lg"
        ? css`
            width: 48px;
            height: 48px;
          `
        : css`
            width: 24px;
            height: 24px;
          `}
    }
  `
);
