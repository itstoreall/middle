import useModal from '../../../hooks/useModal';
import CommonModal from '../CommonModal/CommonModal';
import Slider from './Slidar';
import s from './CertificateModal.module.scss';

const CertificateModal = () => {
  const { CERTIFICATE } = useModal().modaContentEnum;

  return (
    <CommonModal customStyle={CERTIFICATE}>
      <div className={s.modalContent}>
        <Slider />
      </div>
    </CommonModal>
  );
};

export default CertificateModal;
