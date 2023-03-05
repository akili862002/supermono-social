import { PropsWithChildren } from "react";
import { Spinner } from "../Spinner/Spinner";
import * as Styled from "./Button.styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
  children,
  loading,
  ...props
}) => {
  return (
    <Styled.ButtonContainer type="button" {...props}>
      {loading && <Spinner size="md" />}
      {children}
    </Styled.ButtonContainer>
  );
};

export default Button;
