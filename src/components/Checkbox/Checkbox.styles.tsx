import styled, { css } from "styled-components";

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CheckboxInput = styled.input(({ theme }) => css``);

export const Label = styled.span(
  ({ theme }) => css`
    margin-left: ${theme.spacing[3]};
    font-size: ${theme.fontSize.sm};
    line-height: 20px;
    font-weight: ${theme.fontWeight.normal};
  `
);
