/* eslint-disable react-hooks/exhaustive-deps */
import { FC, createContext, useState, useCallback } from 'react';
import useData from '../hooks/useData';
import * as gt from '../types/global';
import * as t from '../components/Toast/types';
import ToastContainer from '../components/Toast/ToastContainer';

const initContext = {
  addToast: () => console.log(),
  removeToast: () => console.log()
};

export const ToastContext = createContext<t.ToastContext>(initContext);

export const ToastProvider: FC<gt.ChildrenProps> = ({ children }) => {
  const [toasts, setToasts] = useState<t.ToastData[]>([]);

  const data = useData();

  const addToast = useCallback((label: t.ToastLabel) => {
    const id = Math.random().toString(36).slice(2, 11);
    const msgDisplayDelay = 0;
    setToasts(prevToasts => [{ id, msg: '', label }, ...prevToasts]);
    setTimeout(() => {
      const msg = data?.toast.position.msg || 'Hello!';
      setToasts(prev =>
        prev.map(toast => (toast.id === id ? { ...toast, msg } : toast))
      );
    }, msgDisplayDelay);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};