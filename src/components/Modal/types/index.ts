import { ReactNode } from 'react';
import { ModalContent } from '../enum';

export type ModalsProviderProps = {
  children: ReactNode;
};

export type ModalContextProps = {
  modal: ModalContent | null;
  openModal: (val: ModalContent) => void;
  isClosing: boolean;
  closeModal(): void;
  modaContentEnum: typeof ModalContent;
  RenderModal: () => JSX.Element;
  isCertificateModal: boolean;
};

export type CloseButtonProps = { closeModal: () => void };

export type CommonModalProps = {
  children: ReactNode;
  customStyle: string;
  CloseButton?: ({ closeModal }: CloseButtonProps) => JSX.Element;
};
