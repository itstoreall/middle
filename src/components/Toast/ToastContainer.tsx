import { FC, useRef, useEffect, useState } from 'react';
import { ToastContainerProps } from './types';
import Toast from './Toast';
import s from './Toast.module.scss';

const ToastContainer: FC<ToastContainerProps> = props => {
  const { toasts, updateToastContent, removeToast } = props;

  const [overflow, setOverflow] = useState('');

  const containerRef = useRef<HTMLDivElement | null>(null);
  const container = containerRef.current;
  const isToasts = toasts.length;

  useEffect(
    () =>
      setOverflow(
        container && container.offsetHeight > window.innerHeight
          ? 'overflow'
          : ''
      ),
    [toasts, container]
  );

  const activeStyle = isToasts ? s.active : '';
  const containerStyle = `${s.toastContainer} ${activeStyle}`;

  return (
    <div className={`${s.toastBlock} ${s[overflow]}`}>
      <div className={containerStyle} ref={containerRef}>
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            label={toast.label}
            msg={toast.msg}
            updateContent={(msg: string) => updateToastContent(toast.id, msg)}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ToastContainer;
