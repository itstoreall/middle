import useModal from '../../../hooks/useModal';
import { CloseButtonProps } from '../types';
import CommonModal from '../CommonModal/CommonModal';
import s from './SecondModal.module.scss';

const CloseButton = ({ handleClose }: CloseButtonProps) => (
  <button className={s.closeButton} onClick={handleClose} title={'close'}>
    <span className={s.closeButtonContent}>x</span>
  </button>
);

const ModalContent = () => <div className={s.modalContent}>SecondModal</div>;

const SecondModal = () => {
  const { SECOND } = useModal().modaContentEnum;

  return (
    <CommonModal customStyle={SECOND} {...{ CloseButton }}>
      <ModalContent />
    </CommonModal>
  );
};

export default SecondModal;
