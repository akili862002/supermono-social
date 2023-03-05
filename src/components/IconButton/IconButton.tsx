import { PropsWithChildren } from "react";
import * as Styled from "./IconButton.styles";

interface IIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton: React.FC<PropsWithChildren<IIconButtonProps>> = ({
  children,
  ...rest
}) => {
  return (
    <Styled.IconButtonContainer type="button" {...rest}>
      {children}
    </Styled.IconButtonContainer>
  );
};

export default IconButton;
