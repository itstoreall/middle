import useModal from '../../hooks/useModal';
import CertificateModal from './CertificateModal';
import PreloaderModal from './PreloaderModal';

const RenderModal = () => {
  const { modal, modaContentEnum } = useModal();
  return modal === modaContentEnum.CERTIFICATE ? (
    <CertificateModal />
  ) : modal === modaContentEnum.PRELOADER ? (
    <PreloaderModal />
  ) : (
    <></>
  );
};

export default RenderModal;
