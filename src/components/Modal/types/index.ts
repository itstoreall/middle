import { Dispatch, ReactNode, SetStateAction } from 'react';
import { ModalContent } from '../enum';

export type ModalsProviderProps = {
  children: ReactNode;
};

export type ModalContextProps = {
  modal: ModalContent | null;
  setModal: Dispatch<SetStateAction<ModalContent | null>>;
  modaContentEnum: typeof ModalContent;
};

export type CommonModalProps = {
  children: ReactNode;
  customStyle: string;
  closeButton?: () => JSX.Element;
};
