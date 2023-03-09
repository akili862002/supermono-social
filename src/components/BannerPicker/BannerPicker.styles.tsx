import styled, { css } from "styled-components";
import { TickIcon as _TickIcon } from "./Banner.icons";

export const BannerPickerContainer = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: ${theme.spacing["2"]};
  `
);

export const ImageButton = styled.button<{
  selected: boolean;
}>(
  ({ theme, selected }) => css`
    position: relative;
    cursor: pointer;
    border: 2px solid transparent;
    width: 100%;
    height: fit-content;
    opacity: ${selected ? 1 : 0.5};
    transition: opacity 0.1s ease-in-out;

    &:hover {
      opacity: 1;
    }

    ${selected &&
    css`
      border: 2px solid ${theme.colors.purple};
    `}
  `
);

export const Image = styled.img(
  ({ theme }) => css`
    width: 100%;
    height: auto;
  `
);

export const TickIcon = styled(_TickIcon)(
  ({ theme }) => css`
    position: absolute;
    top: -1px;
    right: -1px;
    color: ${theme.colors.purple};
    width: 24px;
    height: 24px;
  `
);

export const BannerPicker = styled.button<{ isError: boolean }>`
  background-color: rgba(242, 242, 242, 0.1);
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing["4"]};
  border: none;
  border-radius: 0 64px;
  border: 1px dashed #f2f2f2;
  font-size: ${({ theme }) => theme.fontSize["xl"]};
  color: ${({ theme }) => theme.colors["dark-blue"]};
  font-weight: ${({ theme }) => theme.fontWeight["semibold"]};

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &:hover {
    background-color: rgba(242, 242, 242, 0.2);
  }

  ${({ isError, theme }) =>
    isError &&
    css`
      border-color: ${theme.colors.red};
      color: ${({ theme }) => theme.colors["red"]};
    `}
`;
