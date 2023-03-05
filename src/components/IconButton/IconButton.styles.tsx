import styled, { css } from "styled-components";

export const IconButtonContainer = styled.button(
  ({ theme }) => css`
    flex-shrink: 0;
    display: block;
    padding: ${theme.spacing["1"]};
    border: none;
    background: none;
    cursor: pointer;
    color: ${theme.colors["dark-blue"]};
    border-radius: 8px;

    :hover {
      background: ${theme.colors.gray100};
    }

    svg {
      width: 24px;
      height: 24px;
    }
  `
);
