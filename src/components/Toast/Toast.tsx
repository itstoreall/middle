import { FC, useEffect, useState } from 'react';
import useData from '../../hooks/useData';
import { ToastProps } from './types';
import DeveloperIcon from '../../assets/icons/DeveloperIcon';
import s from './Toast.module.scss';

const SKIP_TIME_KEY = 'middle_toast_skip_time';

const Toast: FC<ToastProps> = ({ msg, label, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  const data = useData();

  const content = msg.split('****');

  useEffect(() => {
    const timestamp = localStorage.getItem(SKIP_TIME_KEY);
    timestamp && handleShow(+timestamp);
  }, []);

  // /*
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true);
      setTimeout(onClose, 500);
    }, 120000);
    return () => clearTimeout(timer);
  }, [onClose]);
  // */

  const handleShow = (time: number) => {
    const now = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    const isBlocked = now - +time < oneDay;
    isBlocked && setShouldShow(false);
  };

  const handleSkip = () => {
    setIsClosing(true);
    const timestamp = new Date().getTime().toString();
    localStorage.setItem(SKIP_TIME_KEY, timestamp);
    setTimeout(onClose, 500);
  };

  if (!content || !data || !shouldShow) return null;

  const closingStyle = isClosing ? s.slideOut : '';
  const toastStyle = `${s.toast} ${s[label]} ${closingStyle}`;

  return (
    <div className={toastStyle}>
      <div className={s.toastContent}>
        <div className={s.msgBlock}>
          {content.map((text, idx) =>
            idx === 0 ? (
              <span key={idx} className={s.msgHeading}>
                <DeveloperIcon />
                <span key={idx} className={s.title}>
                  {text}
                </span>
              </span>
            ) : (
              <p key={idx} className={s.text}>
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

          <button className={s.skip} onClick={handleSkip}>
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
