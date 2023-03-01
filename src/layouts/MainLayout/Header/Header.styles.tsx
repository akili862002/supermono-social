import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
`;

export const LogoImage = styled.img`
  width: 200px;
  height: auto;
`;

export const Menu = {
  Container: styled.nav`
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing[12]};
  `,
  Item: styled.a``,
};
