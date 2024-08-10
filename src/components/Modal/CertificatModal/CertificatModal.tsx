import useModal from '../../../hooks/useModal';
import LockIcon from '../../../assets/icons/LockIcon';
import CommonModal from '../CommonModal/CommonModal';

const CloseButton = () => <LockIcon />;

const CertificatModal = () => {
  const { modaContentEnum } = useModal();

  return (
    <CommonModal
      customStyle={modaContentEnum.CERTIFICATE}
      closeButton={CloseButton}
    >
      <div>CertificatModal</div>
    </CommonModal>
  );
};

export default CertificatModal;
