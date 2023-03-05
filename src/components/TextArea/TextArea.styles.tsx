import styled, { css } from "styled-components";

export const TextAreaContainer = styled.textarea``;

export const TextArea = styled.textarea(
  ({ theme: { fontSize, spacing, colors } }) => css`
    resize: none;
    font-size: ${fontSize.base};
    padding: ${spacing["3.5"]} ${spacing["3"]};
    background: ${colors.white};
    border: none;
    border-radius: 8px;
    width: 100%;
    min-height: 207px;
  `
);
