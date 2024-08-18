import { useContext } from 'react';
import { ToastContext } from '../context/toast';

const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('ERROR in useToast: no context!');
  return context;
};

export default useToast;
