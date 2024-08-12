/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import useModals from '../../../hooks/useModal';
import { CommonModalProps } from '../types';
import s from './CommonModal.module.scss';

const CommonModal = (props: CommonModalProps) => {
  const { children, customStyle, CloseButton } = props;

  const { isClosing, closeModal } = useModals();

  useEffect(() => {
    window.addEventListener('keyup', keyUpClose);
    return () => window.removeEventListener('keyup', keyUpClose);
  }, []);

  const keyUpClose = (event: { key: string }) =>
    event.key === 'Escape' && closeModal();

  const fadeStyle = isClosing ? s.fadeOut : '';
  const modalStyle = `${s.backdrop} ${s[customStyle]} ${fadeStyle}`;

  return (
    <div className={modalStyle} onMouseDown={() => closeModal()}>
      <div className={s.modal} onMouseDown={e => e.stopPropagation()}>
        {CloseButton ? <CloseButton {...{ closeModal }} /> : null}

        {children}
      </div>
    </div>
  );
};

export default CommonModal;
