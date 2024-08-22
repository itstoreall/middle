import { FC, createContext, useState } from 'react';
import { ChildrenProps } from '../types/global';
import useModal from '../hooks/useModal';

type Context = {
  isLoading: boolean;
  // set(is: boolean): void;
  startPreloader(delay?: number): void;
  stopPreloader(delay?: number): void;
};

const initContext = {
  isLoading: false,
  // set: () => false,
  startPreloader: () => console.log(),
  stopPreloader: () => console.log()
};

export const PreloaderContext = createContext<Context>(initContext);

export const PreloaderProvider: FC<ChildrenProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { openModal, closeModal, ModalContentEnum } = useModal();

  // ---

  const handleLoading = (is: boolean) => setIsLoading(is);

  const startPreloader = (delay = 0) => {
    handleLoading(true);
    setTimeout(() => openModal(ModalContentEnum.PRELOADER), delay);
  };

  const stopPreloader = (delay = 0) => {
    handleLoading(false);
    console.log('stopPreloader');
    setTimeout(() => closeModal(), delay);
  };

  // ---

  const value = {
    isLoading,
    // set: (is: boolean) => handleLoading(is),
    startPreloader,
    stopPreloader
  };

  return (
    <PreloaderContext.Provider value={value}>
      {children}
    </PreloaderContext.Provider>
  );
};
