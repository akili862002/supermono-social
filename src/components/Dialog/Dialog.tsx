import { Transition } from "@headlessui/react";
import { createContext, Fragment, PropsWithChildren, useContext } from "react";
import Buttons from "./Buttons/Buttons";
import Content from "./Content/Content";
import * as Styled from "./Dialog.styles";
import Header from "./Header/Header";

interface IDialogProps {
  open: boolean;
  onClose: () => void;
}

const DialogContext = createContext<{ closeDialog?: () => void }>({});
export const useDialogContext = () => useContext(DialogContext);

const Dialog = ({
  open,
  children,
  onClose,
}: PropsWithChildren<IDialogProps>) => {
  const handleClose = () => onClose?.();

  return (
    <DialogContext.Provider value={{ closeDialog: onClose }}>
      <Transition show={open} as={Fragment}>
        <Styled.Dialog onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Styled.DialogOverlay />
          </Transition.Child>

          <Styled.DialogView>
            <Styled.DialogViewInner>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Styled.DialogPanel>{children}</Styled.DialogPanel>
              </Transition.Child>
            </Styled.DialogViewInner>
          </Styled.DialogView>
        </Styled.Dialog>
      </Transition>
    </DialogContext.Provider>
  );
};

Dialog.Header = Header;
Dialog.Content = Content;
Dialog.Buttons = Buttons;

export default Dialog;
