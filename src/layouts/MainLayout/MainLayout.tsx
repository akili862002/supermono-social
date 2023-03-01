import { PropsWithChildren } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Header from "./Header/Header";

interface IMainLayoutProps {}

const MainLayout: React.FC<PropsWithChildren<IMainLayoutProps>> = ({
  children,
}) => {
  return (
    <Wrapper>
      <Wrapper.Container>
        <Header />
        <main>{children}</main>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default MainLayout;
