import { FC, useEffect, useState } from 'react';
import useData from '../../hooks/useData';
import { ToastProps } from './types';
import DeveloperIcon from '../../assets/icons/DeveloperIcon';
import ReactIcon from '../../assets/icons/ReactIcon';
import s from './Toast.module.scss';

const SKIP_TIME_KEY = 'middle_toast_skip_time';
const autoCloseDelay = 120000;

const Toast: FC<ToastProps> = ({ msg, label, updateContent, onClose }) => {
  const [isInitContent, setIsInitContent] = useState(true);
  const [shouldShow, setShouldShow] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
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
    }, autoCloseDelay);
    return () => clearTimeout(timer);
  }, [onClose]);
  // */

  const handleShow = (time: number) => {
    const now = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    const isBlocked = now - +time < oneDay;
    isBlocked && setShouldShow(false);
  };

  const handleConent = () => {
    setIsInitContent(false);
    const msg = data?.toast.position.msg.details || 'React!';
    updateContent(msg);
  };

  const handleClose = () => onClose();

  const handleSkip = () => {
    setIsClosing(true);
    const timestamp = new Date().getTime().toString();
    localStorage.setItem(SKIP_TIME_KEY, timestamp);
    setTimeout(onClose, 500);
  };

  if (!content || !data || !shouldShow) return null;

  const closingStyle = isClosing ? s.slideOut : '';
  const contentStyle = isInitContent ? '' : s.details;
  const conditionStyle = `${contentStyle} ${closingStyle}`;
  const toastStyle = `${s.toast} ${s[label]} ${conditionStyle}`;

  return (
    <div className={toastStyle}>
      <div className={s.toastContent}>
        <div className={`${s.msgBlock} ${isInitContent ? '' : s.details}`}>
          {isInitContent
            ? content.map((text, idx) =>
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
              )
            : content.map((text, idx) =>
                idx === 0 ? (
                  <span key={idx} className={s.msgHeading}>
                    <ReactIcon />
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

          <span className={s.controlButtonBlock}>
            {isInitContent && (
              <button className={s.details} onClick={handleConent}>
                Details
              </button>
            )}

            <button
              className={s.close}
              onClick={isInitContent ? handleSkip : handleClose}
            >
              {isInitContent ? 'Hide' : 'Close'}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Toast;
