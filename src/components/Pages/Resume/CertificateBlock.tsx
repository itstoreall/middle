import useModal from '../../../hooks/useModal';
import s from './Resume.module.scss';

const CertificateBlock = () => {
  const { openModal, ModaContentEnum } = useModal();

  const seeCertificates = () => openModal(ModaContentEnum.CERTIFICATE);

  return (
    <button className={s.closeModalButton} onClick={seeCertificates}>
      <span className={s.buttonContent}>
        <span>{'see certificates'}</span>
      </span>
    </button>
  );
};

export default CertificateBlock;
