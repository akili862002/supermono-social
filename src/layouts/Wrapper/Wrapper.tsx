import { PropsWithChildren } from "react";
import * as Styled from "./Wrapper.styles";

interface IWrapperProps {}

const Wrapper = (props: PropsWithChildren<IWrapperProps>) => {
  return <Styled.Wrapper>{props.children}</Styled.Wrapper>;
};

Wrapper.Container = (props: PropsWithChildren) => {
  return <Styled.Container>{props.children}</Styled.Container>;
};

Wrapper.displayName = "Wrapper";

export default Wrapper;
