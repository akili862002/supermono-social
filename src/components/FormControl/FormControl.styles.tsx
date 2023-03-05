import styled, { css } from "styled-components";

export const FormControlContainer = styled.div``;

export const Label = styled.label(
  ({ theme: { fontSize, fontWeight, colors } }) => css`
    color: ${colors.black};
    font-size: ${fontSize.base};
    font-weight: ${fontWeight.normal};
    margin-bottom: 6px;
  `
);

export const Description = styled.span(
  ({ theme }) => css`
    margin-top: 2px;
    display: block;
    font-size: ${theme.fontSize.sm};
    color: ${theme.colors.gray600};
  `
);

export const Helper = styled.span(
  ({ theme: { colors, fontSize, fontWeight } }) => css`
    color: ${colors.red};
    font-size: ${fontSize.sm};
    font-weight: ${fontWeight.medium};
  `
);
