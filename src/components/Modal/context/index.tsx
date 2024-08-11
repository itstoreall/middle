import { createContext, useEffect, useMemo, useState } from 'react';
import { ModalContextProps, ModalsProviderProps } from '../types';
import { ModalContent } from '../enum';
import RenderModal from '../index';

const ModalsContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalsProvider = ({ children }: ModalsProviderProps) => {
  const [modal, setModal] = useState<ModalContent | null>(null);

  useEffect(() => {
    document.body.style.overflow = modal ? 'unset' : 'hidden';
  }, [modal]);

  const values = useMemo(() => {
    return {
      modal,
      setModal,
      modaContentEnum: ModalContent,
      RenderModal
    };
  }, [modal]);

  return (
    <ModalsContext.Provider value={values}>{children}</ModalsContext.Provider>
  );
};

export default ModalsContext;
