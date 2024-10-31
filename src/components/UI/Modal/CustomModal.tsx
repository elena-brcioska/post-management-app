import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import StyledModal from "./styled/CustomModal.styled";
import { IModalHandle, IModalProps } from "./types";

const CustomModal = forwardRef<IModalHandle, IModalProps>(({ children, onClose }, ref) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
  }));

  return createPortal(
    <StyledModal ref={dialog} onClose={onClose}>
      {children}

    </StyledModal>,
    document.getElementById("modal-root")!
  );
});

export default CustomModal;