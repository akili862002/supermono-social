import styled, { css } from "styled-components";

import { RadioGroup as _RadioGroup } from "@headlessui/react";

export const RadioGroup = styled(_RadioGroup)(
  ({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: row;
    gap: ${spacing["8"]};
    flex-wrap: wrap;
  `
);

export const RadioGroupOption = styled(_RadioGroup.Option)(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${theme.spacing["2"]};
    min-height: 40px;
    border-radius: 8px;
    cursor: pointer;
    font-size: ${theme.fontSize.sm};
    font-weight: ${theme.fontWeight.normal};
  `
);
