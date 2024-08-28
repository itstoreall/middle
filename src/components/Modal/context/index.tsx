/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useMemo, useState } from 'react';
import { ModalContentEnum } from '../enum';
import { ModalContextProps } from '../types';
import * as gt from '../../../types/global';
import RenderModal from '../index';

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
