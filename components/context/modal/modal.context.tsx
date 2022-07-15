import { createContext } from 'react';
import { ModalProps, ModalSize } from 'rsuite/esm/Modal/Modal';

export interface IOpenModal extends ModalProps {
  size?: ModalSize;
  modalComponent: JSX.Element;
  onOpenModal?: () => void;
  onCloseModal?: () => void;
}

interface IModalMethods {
  openModal: (params: IOpenModal) => void;
  closeModal: () => void;
  setModalComponent: (newModalComponent: JSX.Element) => void;
}
const modalMethods = {
  openModal: () => null,
  closeModal: () => null,
  setModalComponent: () => null,
};
export const ModalContext = createContext<IModalMethods>(modalMethods);
