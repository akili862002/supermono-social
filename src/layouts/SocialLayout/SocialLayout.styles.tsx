import styled, { css } from "styled-components";

export const SocialLayoutContainer = styled.div`
  position: relative;
`;

export const FormSection = styled.div(
  ({ theme: {} }) => css`
    padding: ${({ theme }) => theme.spacing["8"]};
    width: 55%;
    position: relative;
    z-index: 2;
  `
);

export const BannerSection = styled.div`
  position: absolute;
  width: 58.33333333%;
  right: 0;
  top: 0;
  border-radius: 0px 64px;
  overflow: hidden;
  z-index: 1;
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

export const FieldsContainer = styled.div(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing["7"]};
  `
);

export const FieldsRow = styled.div(
  ({ theme: { spacing } }) => css`
    display: flex;
    align-items: center;
    gap: ${spacing["8"]};
  `
);

export const Field = styled.div<{ size: "lg" | "md" }>(
  ({ size, theme: { fontWeight, fontSize, spacing } }) => css`
    font-weight: ${fontWeight.semibold};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${spacing["2"]};
    min-height: 40px;

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

export const NoneTimeContainer = styled.div(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing["7"]};
  `
);

export const Description = styled.p(
  ({ theme: { colors, fontWeight, fontSize, spacing } }) => css`
    white-space: pre-wrap;
    margin-top: ${spacing["8"]};
    color: ${colors.gray1};
    font-style: normal;
    font-weight: ${fontWeight.normal};
    font-size: ${fontSize.lg};
    line-height: 28px;
  `
);
