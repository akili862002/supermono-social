import { useMemo } from "react";
import { HamburgerIcon } from "./Header.icons";
import * as Styled from "./Header.styles";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props) => {
  const headerItems = useMemo(
    () => [
      { label: "Blog", href: "#blog" },
      { label: "Socials", href: "#socials" },
      { label: "Past Socials", href: "#past-socials" },
      { label: "Clubs", href: "#clubs" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  return (
    <Styled.HeaderContainer>
      <Styled.LogoImage src="/logo.png" />
      <Styled.Menu.Container>
        {headerItems.map(({ label, href }) => (
          <Styled.Menu.Item key={href} href={href}>
            {label}
          </Styled.Menu.Item>
        ))}
      </Styled.Menu.Container>

      <Styled.HamburgerMenu.Container>
        <Styled.HamburgerMenu.MenuButton>
          <HamburgerIcon />
        </Styled.HamburgerMenu.MenuButton>
        <Styled.HamburgerMenu.Items>
          {headerItems.map(({ label, href }) => (
            <Styled.HamburgerMenu.Item key={href} href={href}>
              {label}
            </Styled.HamburgerMenu.Item>
          ))}
        </Styled.HamburgerMenu.Items>
      </Styled.HamburgerMenu.Container>
    </Styled.HeaderContainer>
  );
};

export default Header;
