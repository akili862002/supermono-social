import * as Styled from "./Header.styles";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <Styled.HeaderContainer>
      <Styled.LogoImage src="/logo.png" />
      <Styled.Menu.Container>
        <Styled.Menu.Item href="#blog">Blog</Styled.Menu.Item>
        <Styled.Menu.Item href="#socials">Socials</Styled.Menu.Item>
        <Styled.Menu.Item href="#past-socials">Past Socials</Styled.Menu.Item>
        <Styled.Menu.Item href="#clubs">Clubs</Styled.Menu.Item>
        <Styled.Menu.Item href="#contact">Contact</Styled.Menu.Item>
      </Styled.Menu.Container>
    </Styled.HeaderContainer>
  );
};

export default Header;
