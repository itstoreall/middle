import { ReactNode } from 'react';

export type CloseButtonProps = { closeModal: () => void };

export type CommonModalProps = {
  children: ReactNode;
  customStyle: string;
  CloseButton?: ({ closeModal }: CloseButtonProps) => JSX.Element;
};
