import useModal from '../../hooks/useModal';
import CertificateModal from './CertificateModal';
import PreloaderModal from './PreloaderModal';

const RenderModal = () => {
  const { isCertificateModal, isPreloaderModal } = useModal();

  switch (true) {
    case isCertificateModal:
      return <CertificateModal />;
    case isPreloaderModal:
      return <PreloaderModal />;
    default:
      return <></>;
  }
};

export default RenderModal;
