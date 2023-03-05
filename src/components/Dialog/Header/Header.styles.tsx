import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => theme.spacing["3"]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.fontWeight["bold"]};
  color: ${({ theme }) => theme.colors["dark-blue"]};
`;
