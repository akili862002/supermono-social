import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;

  ${({ theme }) => theme.media.down("1024px")} {
    padding: 0;
  }
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
    ${({ theme }) => theme.media.down("1024px")} {
      display: none;
    }
  `,
  Item: styled.a``,
};

const HamburgerMenuItems = styled.div`
  position: fixed;
  display: none;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1000;
`;

export const HamburgerMenu = {
  Container: styled.div`
    display: none;
    position: relative;

    ${({ theme }) => theme.media.down("1024px")} {
      display: flex;
    }

    &:hover {
      ${HamburgerMenuItems} {
        display: block;
      }
    }
  `,
  MenuButton: styled.button`
    padding: 5px;
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.gray1};
    }

    svg {
      width: 30px;
      height: 30px;
    }
  `,
  Items: HamburgerMenuItems,
  Item: styled.a`
    display: block;
    padding: 12px 16px;
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray100};
    }
  `,
};
