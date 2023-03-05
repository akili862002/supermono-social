import styled, { css } from "styled-components";

export const ButtonContainer = styled.button(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    outline: none;
    padding: 0;
    background: transparent;
    color: ${theme.colors.purple};
    font-size: ${theme.fontSize.base};
    font-weight: ${theme.fontWeight.medium};
    padding: ${theme.spacing[3]} ${theme.spacing[4]};
    background-color: ${theme.colors.yellow};
    line-height: 24px;
    width: 100%;

    &:hover {
      opacity: 0.8;
    }
  `
);
