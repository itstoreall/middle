import useModal from '../../../hooks/useModal';
import s from './Resume.module.scss';

const CertificateBlock = () => {
  const { openModal, modaContentEnum } = useModal();

  const seeCertificates = () => openModal(modaContentEnum.CERTIFICATE);

  return (
    <button className={s.closeModalButton} onClick={seeCertificates}>
      <span className={s.buttonContent}>
        <span>{'see certificates'}</span>
      </span>
    </button>
  );
};

export default CertificateBlock;
