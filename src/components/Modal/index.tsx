import useModal from '../../hooks/useModal';
import CertificatModal from './CertificatModal';
import SecondModal from './SecondModal';

const RenderModal = () => {
  const { modal, modaContentEnum } = useModal();
  return modal === modaContentEnum.CERTIFICATE ? (
    <CertificatModal />
  ) : modal === modaContentEnum.SECOND ? (
    <SecondModal />
  ) : null;
};

export default RenderModal;
