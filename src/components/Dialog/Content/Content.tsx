import { PropsWithChildren } from "react";
import * as Styled from "./Content.styles";

const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return <Styled.ContentContainer>{children}</Styled.ContentContainer>;
};

export default Content;
