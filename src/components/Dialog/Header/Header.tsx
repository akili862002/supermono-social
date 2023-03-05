import IconButton from "@/components/IconButton/IconButton";
import { PropsWithChildren } from "react";
import { useDialogContext } from "../Dialog";
import { CloseIcon } from "./Header.icons";
import * as Styled from "./Header.styles";

const Header: React.FC<PropsWithChildren> = ({ children }) => {
  const { closeDialog } = useDialogContext();
  return (
    <Styled.HeaderContainer>
      <Styled.Title>{children}</Styled.Title>
      <IconButton onClick={() => closeDialog()}>
        <CloseIcon />
      </IconButton>
    </Styled.HeaderContainer>
  );
};

export default Header;
