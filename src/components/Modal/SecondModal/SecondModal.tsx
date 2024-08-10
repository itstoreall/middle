import useModal from '../../../hooks/useModal';
import LockIcon from '../../../assets/icons/LockIcon';
import CommonModal from '../CommonModal/CommonModal';

const CloseButton = () => <LockIcon />;

const SecondModal = () => {
  const { modaContentEnum } = useModal();

  return (
    <CommonModal customStyle={modaContentEnum.SECOND} closeButton={CloseButton}>
      <div>SecondModal</div>
    </CommonModal>
  );
};

export default SecondModal;
