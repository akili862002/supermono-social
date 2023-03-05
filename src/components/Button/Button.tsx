import { PropsWithChildren } from "react";
import { Spinner } from "../Spinner/Spinner";
import * as Styled from "./Button.styles";

export type IButtonVariant = "primary" | "text";
export type IButtonSize = "md" | "lg";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IButtonVariant;
  loading?: boolean;
  size?: IButtonSize;
}

const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
  children,
  loading,
  variant = "primary",
  size = "md",
  ...props
}) => {
  return (
    <Styled.ButtonContainer
      size={size}
      variant={variant}
      type="button"
      {...props}
    >
      {loading && <Spinner size="md" />}
      {children}
    </Styled.ButtonContainer>
  );
};

export default Button;
