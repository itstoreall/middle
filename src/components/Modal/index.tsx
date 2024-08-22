import useModal from '../../hooks/useModal';
import CertificateModal from './CertificateModal';
import PreloaderModal from './PreloaderModal';

const RenderModal = () => {
  const { modal, ModaContentEnum } = useModal();
  return modal === ModaContentEnum.CERTIFICATE ? (
    <CertificateModal />
  ) : modal === ModaContentEnum.PRELOADER ? (
    <PreloaderModal />
  ) : (
    <></>
  );
};

export default RenderModal;
