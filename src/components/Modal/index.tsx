import useModal from '../../hooks/useModal';
import CertificateModal from './CertificateModal';
import SecondModal from './SecondModal';

const RenderModal = () => {
  const { modal, modaContentEnum } = useModal();
  return modal === modaContentEnum.CERTIFICATE ? (
    <CertificateModal />
  ) : modal === modaContentEnum.SECOND ? (
    <SecondModal />
  ) : (
    <></>
  );
};

export default RenderModal;
