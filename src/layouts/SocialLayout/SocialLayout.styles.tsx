import styled, { css } from "styled-components";

export const SocialLayoutContainer = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.spacing["20"]};
`;

export const FormSection = styled.div(
  ({ theme }) => css`
    padding: ${theme.spacing["8"]};
    width: 55%;
    position: relative;
    z-index: 2;

    ${theme.media.down("640px")} {
      width: 100%;
      padding: ${theme.spacing["8"]} 0;
    }
  `
);

export const BannerSection = {
  Container: styled.div(
    ({ theme }) => `
    --width: 58.33333333%;

    position: absolute;
    width: var(--width);
    height: 0;
    right: 0;
    top: 0;
    z-index: 1;
    padding-bottom: calc(var(--width) * 445 / 740);

    ${theme.media.down("1024px")} {
      --width: 100%;
      position: relative;
    }
  `
  ),
  Content: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
  `,
};

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
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing["8"]};

    ${theme.media.down("640px")} {
      flex-direction: column;
    }
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
    width: 100%;

    span {
      width: 100%;
    }

    ${size === "lg"
      ? css`
          font-size: ${fontSize["3xl"]};
        `
      : css`
          font-size: ${fontSize.base};
        `}
    & > svg {
      flex-shrink: 0;
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

export const Settings = {
  Container: styled.div(
    ({ theme: { spacing, colors, shadow } }) => css`
      margin-top: ${spacing["8"]};
      padding: ${spacing["8"]};
      background: ${colors.white};
      border-radius: 20px;
      box-shadow: ${shadow.md}; ;
    `
  ),
  Title: styled.h2(
    ({ theme: { colors, fontWeight, fontSize, spacing } }) => css`
      font-style: normal;
      font-weight: ${fontWeight.bold};
      font-size: ${fontSize["4xl"]};
      line-height: 32px;
      color: ${colors.purple};
      margin-bottom: ${spacing["8"]};
      background: ${colors.yellow};
      padding: ${spacing["3"]};
      width: fit-content;
    `
  ),
};
