import { ReactNode } from 'react';
import { ModalContentEnum } from '../enum';

export type ModalContextProps = {
  modal: ModalContentEnum | null;
  openModal: (val: ModalContentEnum) => void;
  isClosing: boolean;
  closeModal(): void;
  ModalContentEnum: typeof ModalContentEnum;
  RenderModal: () => JSX.Element;
  isCertificateModal: boolean;
  isPreloaderModal: boolean;
};

export type CloseButtonProps = { closeModal: () => void };

export type CommonModalProps = {
  children: ReactNode;
  customStyle: string;
  CloseButton?: ({ closeModal }: CloseButtonProps) => JSX.Element;
};
