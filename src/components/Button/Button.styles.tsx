import styled, { css } from "styled-components";
import { IButtonSize, IButtonVariant } from "./Button";

export const ButtonContainer = styled.button<{
  variant: IButtonVariant;
  size: IButtonSize;
}>(
  ({ theme, variant, size }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    outline: none;
    padding: 0;
    line-height: 24px;
    width: 100%;

    ${variant === "primary" &&
    css`
      color: ${theme.colors.purple};
      background-color: ${theme.colors.yellow};
    `}

    ${variant === "text" &&
    css`
      color: ${theme.colors.gray700};
      background-color: transparent;
    `}

    ${size === "lg" &&
    css`
      font-size: ${theme.fontSize.base};
      font-weight: ${theme.fontWeight.medium};
      padding: ${theme.spacing[3]} ${theme.spacing[4]};
    `}

    ${size === "md" &&
    css`
      font-size: ${theme.fontSize.base};
      font-weight: ${theme.fontWeight.medium};
      padding: ${theme.spacing[2]} ${theme.spacing[4]};
    `}

    &:hover {
      opacity: 0.8;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `
);
