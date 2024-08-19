import { FC, useEffect, useState } from 'react';
import { ToastProps } from './types';
import s from './Toast.module.scss';
import useData from '../../hooks/useData';

const Toast: FC<ToastProps> = ({ msg, label, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const data = useData();

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

  if (!content || !data) return null;

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
        <div className={s.buttonBlock}>
          <a
            href={data.message_linkedin_url}
            className={s.messageLinkedIn}
            target='_blank'
            rel='noopener noreferrer'
          >
            Message LinkedIn
          </a>

          <button
            className={s.skip}
            onClick={() => {
              setIsClosing(true);
              setTimeout(onClose, 500);
            }}
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
