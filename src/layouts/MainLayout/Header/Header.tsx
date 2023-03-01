import * as Styled from "./Header.styles";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <Styled.HeaderContainer>
      <Styled.LogoImage src="/logo.png" />
      <Styled.Menu.Container>
        <Styled.Menu.Item>Blog</Styled.Menu.Item>
        <Styled.Menu.Item>Socials</Styled.Menu.Item>
        <Styled.Menu.Item>Past Socials</Styled.Menu.Item>
        <Styled.Menu.Item>Clubs</Styled.Menu.Item>
        <Styled.Menu.Item>Contact</Styled.Menu.Item>
      </Styled.Menu.Container>
    </Styled.HeaderContainer>
  );
};

export default Header;
