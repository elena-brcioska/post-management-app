import { type ReactNode } from "react";

export interface IModalHandle {
    open: () => void;
  };
  
export interface IModalProps {
    children: ReactNode;
    onClose: () => void;
  };
  