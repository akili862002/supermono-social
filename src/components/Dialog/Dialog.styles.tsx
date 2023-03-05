import styled, { css } from "styled-components";
import { Dialog as _Dialog } from "@headlessui/react";
import _IconButton from "../IconButton/IconButton";

export const Dialog = styled(_Dialog)`
  .ease-out {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  .duration-300 {
    transition-duration: 300ms;
  }

  .opacity-0 {
    opacity: 0;
  }

  .opacity-100 {
    opacity: 1;
  }

  .ease-in {
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  }

  .duration-200 {
    transition-duration: 200ms;
  }

  .scale-95 {
    transform: scale(0.95);
  }
`;

export const DialogOverlay = styled.div`
  position: fixed;
  z-index: 1000;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const DialogView = styled.div(
  ({ theme }) => css`
    z-index: 1001;
    position: fixed;
    inset: 0;
    overflow: hidden;
  `
);

export const DialogViewInner = styled.div(
  ({ theme }) => css`
    min-height: 100%;
    padding: ${theme.spacing["8"]} ${theme.spacing["4"]};
    display: flex;
    align-items: center;
    justify-content: center;
  `
);

export const DialogPanel = styled(_Dialog.Panel)(
  ({ theme }) => css`
    position: relative;
    display: inline-block;
    background: ${theme.colors.white};
    border-radius: 8px;
    text-align: left;
    min-height: 300px;
    vertical-align: middle;
    overflow-y: auto;
    max-width: ${theme.breakpoints.laptop};
    width: 100%;
    max-height: calc(100vh - 32px * 2);
  `
);
