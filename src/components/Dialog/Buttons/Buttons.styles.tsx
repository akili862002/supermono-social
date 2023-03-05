import styled, { css } from "styled-components";

export const ButtonsContainer = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  padding: ${({ theme }) => theme.spacing["3"]};
  border-top: 1px solid ${({ theme }) => theme.colors.gray300};
  gap: ${({ theme }) => theme.spacing["2"]};
  & > button {
    width: fit-content;
  }
`;
