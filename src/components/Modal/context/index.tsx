/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useMemo, useState } from 'react';
import { ModalContextProps, ModalsProviderProps } from '../types';
import { ModalContent } from '../enum';
import RenderModal from '../index';

const ModalsContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalsProvider = ({ children }: ModalsProviderProps) => {
  const [modal, setModal] = useState<ModalContent | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = modal ? 'unset' : 'hidden';
  }, [modal]);

  // ---

  const isCertificateModal = modal === ModalContent.CERTIFICATE;

  const openModal = (val: ModalContent) => setModal(val);

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
      modaContentEnum: ModalContent,
      RenderModal,
      isCertificateModal
    };
  }, [modal, isClosing]);

  return (
    <ModalsContext.Provider value={values}>{children}</ModalsContext.Provider>
  );
};

export default ModalsContext;
