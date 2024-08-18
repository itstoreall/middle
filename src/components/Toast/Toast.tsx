import { FC, useEffect, useState } from 'react';
import { ToastProps } from './types';
import s from './Toast.module.scss';

const Toast: FC<ToastProps> = ({ msg, label, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const content = msg.split('****');

  // /*
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true);
      setTimeout(onClose, 500);
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);
  // */

  if (!content) return null;

  const closingStyle = isClosing ? s.slideOut : '';
  const toastStyle = `${s.toast} ${s[label]} ${closingStyle}`;

  return (
    <div className={toastStyle}>
      <div className={s.toastContent}>
        <div className={s.messageBlock}>
          {content.map((text, idx) =>
            idx === 0 ? (
              <span key={idx} className={s.title}>
                {text}
              </span>
            ) : (
              <p key={idx} className={s.message}>
                {text}
              </p>
            )
          )}
        </div>
        <div className={s.messageBlock}>
          <button
            onClick={() => {
              setIsClosing(true);
              setTimeout(onClose, 500);
            }}
          >
            X
          </button>

          <a
            href='https://www.linkedin.com/messaging/thread/new/?recipient=serhiistanislav'
            target='_blank'
            rel='noopener noreferrer'
          >
            Message John Doe on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Toast;
