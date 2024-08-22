/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import useApp from '../../../hooks/useApp';
import useModal from '../../../hooks/useModal';
import usePreloader from '../../../hooks/usePreloader';
import CommonModal from '../CommonModal/CommonModal';
import Loader from '../../../assets/animations/Loader';
import s from './PreloaderModal.module.scss';

const CloseButton = () => {
  const { stopPreloader } = usePreloader();
  const app = useApp();

  useEffect(() => {
    !app.isPending() && stopPreloader();
  }, [app.status]);

  return <></>;
};

const ModalContent = () => (
  <div className={s.modalContent}>
    <Loader />
  </div>
);

const PreloaderModal = () => {
  const { PRELOADER } = useModal().ModalContentEnum;

  return (
    <CommonModal customStyle={PRELOADER} {...{ CloseButton }}>
      <ModalContent />
    </CommonModal>
  );
};

export default PreloaderModal;
