import styled, { css } from "styled-components";

export const TagPickerContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing["4"]};
    margin-top: ${theme.spacing["6"]};
  `
);

export const OptionsContainer = styled.ul(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: ${theme.spacing["2"]};
  `
);

export const Option = styled.li<{
  selected: boolean;
}>(
  ({ theme, selected }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing["2"]};
    padding: 2px 10px;
    border-radius: 16px;
    font-size: ${theme.fontSize.sm};
    font-weight: ${theme.fontWeight.normal};
    background: ${selected ? theme.colors.primary50 : theme.colors.gray100};
    color: ${selected ? theme.colors.purple : theme.colors.gray700};
    cursor: pointer;
    width: fit-content;
    line-height: 20px;
  `
);

export const DeselectButton = styled.div(({ theme }) => css``);
