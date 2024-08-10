/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import useModals from '../../../hooks/useModal';
import { CommonModalProps } from '../types';
import s from './CommonModal.module.scss';

const CommonModal = (props: CommonModalProps) => {
  const { children, customStyle, closeButton } = props;

  const [isClosing, setIsClosing] = useState(false);

  const { setModal } = useModals();

  useEffect(() => {
    window.addEventListener('keyup', keyUpClose);
    return () => window.removeEventListener('keyup', keyUpClose);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModal(null);
      setIsClosing(false);
    }, 500);
  };

  const keyUpClose = (event: { key: string }) =>
    event.key === 'Escape' && handleClose();

  const fadeStyle = isClosing ? s.fadeOut : '';
  const modalStyle = `${s.backdrop} ${s[customStyle]} ${fadeStyle}`;

  return (
    <div className={modalStyle} onMouseDown={() => handleClose()}>
      <div className={s.modal} onMouseDown={e => e.stopPropagation()}>
        <button className={s.closeButton} onClick={handleClose}>
          {closeButton ? closeButton() : null}
        </button>
        {children}
      </div>
    </div>
  );
};

export default CommonModal;
