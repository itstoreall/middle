export type ToastLabel = 'position' | 'error';

export type ToastData = {
  id: string;
  label: ToastLabel;
  msg: string;
};

export type ToastContainerProps = {
  toasts: ToastData[];
  removeToast: (id: string) => void;
};

export type ToastProps = {
  onClose: () => void;
} & Pick<ToastData, 'label' | 'msg'>;

export type ToastContext = {
  addToast: (label: ToastLabel) => void;
  removeToast: (id: string) => void;
};
