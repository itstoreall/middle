import useModal from '../../../hooks/useModal';
import CommonModal from '../CommonModal/CommonModal';
import Loader from '../../../assets/animations/Loader';
import s from './PreloaderModal.module.scss';

const CloseButton = () => <></>;

const ModalContent = () => (
  <div className={s.modalContent}>
    <Loader />
  </div>
);

const PreloaderModal = () => {
  const { PRELOADER } = useModal().ModaContentEnum;

  return (
    <CommonModal customStyle={PRELOADER} {...{ CloseButton }}>
      <ModalContent />
    </CommonModal>
  );
};

export default PreloaderModal;
