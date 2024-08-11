/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import useModals from '../../../hooks/useModal';
import { CommonModalProps } from '../types';
import s from './CommonModal.module.scss';

const CommonModal = (props: CommonModalProps) => {
  const { children, customStyle, CloseButton } = props;

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
        {CloseButton ? <CloseButton {...{ handleClose }} /> : null}

        {children}
      </div>
    </div>
  );
};

export default CommonModal;
