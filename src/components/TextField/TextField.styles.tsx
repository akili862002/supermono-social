import styled, { css } from "styled-components";

export const Input = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 0px 12px;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: inherit;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray1};
  }
`;
