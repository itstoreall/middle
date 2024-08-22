import useModal from '../../../hooks/useModal';
import CommonModal from '../CommonModal/CommonModal';
import Slider from './Slider';
import s from './CertificateModal.module.scss';

const CertificateModal = () => {
  const { CERTIFICATE } = useModal().ModalContentEnum;

  return (
    <CommonModal customStyle={CERTIFICATE}>
      <div className={s.modalContent}>
        <Slider />
      </div>
    </CommonModal>
  );
};

export default CertificateModal;
