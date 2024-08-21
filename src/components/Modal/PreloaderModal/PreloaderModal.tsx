import useModal from '../../../hooks/useModal';
import { CloseButtonProps } from '../types';
import CommonModal from '../CommonModal/CommonModal';
import s from './PreloaderModal.module.scss';
import Loader from '../../../assets/animations/Loader';

const CloseButton = ({ closeModal }: CloseButtonProps) => {
  setTimeout(() => closeModal(), 1600);
  return <></>;
};

const ModalContent = () => (
  <div className={s.modalContent}>
    <Loader />
  </div>
);

const PreloaderModal = () => {
  const { PRELOADER } = useModal().modaContentEnum;

  return (
    <CommonModal customStyle={PRELOADER} {...{ CloseButton }}>
      <ModalContent />
    </CommonModal>
  );
};

export default PreloaderModal;
