export type ToastLabel = 'position' | 'error';

export type ToastData = {
  id: string;
  label: ToastLabel;
  msg: string;
};

export type ToastContext = {
  addToast: (label: ToastLabel) => void;
  updateToastContent: (id: string, msg: string) => void;
  removeToast: (id: string) => void;
};

export type ToastContainerProps = {
  toasts: ToastData[];
} & Pick<ToastContext, 'updateToastContent' | 'removeToast'>;

export type ToastProps = {
  onClose: () => void;
  updateContent: (msg: string) => void;
} & Pick<ToastData, 'label' | 'msg'>;
