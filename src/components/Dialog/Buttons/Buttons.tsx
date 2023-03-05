import Button, { IButtonProps } from "@/components/Button/Button";
import { PropsWithChildren } from "react";
import { useDialogContext } from "../Dialog";
import * as Styled from "./Buttons.styles";

interface IButtonsProps {}

const Buttons = (props: PropsWithChildren<IButtonsProps>) => {
  return <Styled.ButtonsContainer>{props.children}</Styled.ButtonsContainer>;
};

Buttons.CancelButton = ({
  children,
  ...rest
}: PropsWithChildren<IButtonProps>) => {
  const { closeDialog } = useDialogContext();

  return (
    <Button onClick={() => closeDialog()} variant="text" {...rest}>
      {children || "Cancel"}
    </Button>
  );
};

export default Buttons;
