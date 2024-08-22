/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useMemo, useState } from 'react';
import * as gt from '../../../types/global';
import { ModalContentEnum } from '../enum';
import RenderModal from '../index';

type ModalContextProps = {
  modal: ModalContentEnum | null;
  openModal: (val: ModalContentEnum) => void;
  isClosing: boolean;
  closeModal(): void;
  ModalContentEnum: typeof ModalContentEnum;
  RenderModal: () => JSX.Element;
  isCertificateModal: boolean;
  isPreloaderModal: boolean;
};

const initContext: ModalContextProps = {
  modal: null,
  openModal: () => {},
  isClosing: false,
  closeModal: () => {},
  ModalContentEnum: ModalContentEnum,
  RenderModal: () => <></>,
  isCertificateModal: false,
  isPreloaderModal: false
};

const ModalContext = createContext<ModalContextProps>(initContext);

export const ModalProvider = ({ children }: gt.ChildrenProps) => {
  const [modal, setModal] = useState<ModalContentEnum | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  console.log('modal', modal);

  const isCertificateModal = modal === ModalContentEnum.CERTIFICATE;
  const isPreloaderModal = modal === ModalContentEnum.PRELOADER;

  // ---

  const openModal = (val: ModalContentEnum) => setModal(val);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModal(null);
      setIsClosing(false);
    }, 500);
  };

  const values = useMemo(() => {
    return {
      modal,
      openModal,
      isClosing,
      closeModal,
      ModalContentEnum,
      RenderModal,
      isCertificateModal,
      isPreloaderModal
    };
  }, [modal, isClosing]);

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export default ModalContext;
