import { FC, createContext, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChildrenProps } from '../types/global';

enum StatusEnum {
  INIT = 'init',
  PENDING = 'pending',
  ACTIVE = 'active'
}

type Context = {
  status: StatusEnum;
  set: (status: StatusEnum) => void;
  isInit(): boolean;
  isPending(): boolean;
  isActive(): boolean;
  StatusEnum: typeof StatusEnum;
};

const initContext = {
  status: StatusEnum.INIT,
  set: () => {},
  isInit: () => false,
  isPending: () => false,
  isActive: () => false,
  StatusEnum: StatusEnum
};

export const AppContext = createContext<Context>(initContext);

// --- Provider:

export const AppProvider: FC<ChildrenProps> = ({ children }) => {
  const [status, setStatus] = useState<StatusEnum>(StatusEnum.PENDING);

  const location = useLocation();

  useLayoutEffect(() => {
    handleStatus(StatusEnum.PENDING);
    setTimeout(() => handleStatus(StatusEnum.INIT), 1800);
  }, [location]);

  const handleStatus = (status: StatusEnum) => setStatus(status);
  const isInit = () => status === StatusEnum.INIT;
  const isPending = () => status === StatusEnum.PENDING;
  const isActive = () => status === StatusEnum.ACTIVE;

  const value = {
    status,
    set: handleStatus,
    isInit,
    isPending,
    isActive,
    StatusEnum
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
