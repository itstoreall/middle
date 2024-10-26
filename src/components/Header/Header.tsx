import useModal from '../../hooks/useModal';
import { CloseButtonProps } from '../Modal/types';
import * as gt from '../../types/global';
import Container, { containerEnum } from '../Container';
import DownloadPDF from '../PDF/Download';
import NavButton from '../NavButton';
import s from './Header.module.scss';

const { Label } = containerEnum;

const CloseModalButton = ({ closeModal }: CloseButtonProps) => (
  <button className={s.closeModalButton} onClick={closeModal}>
    <span className={s.buttonContent}>
      <span>{'close'}</span>
    </span>
  </button>
);

const Header = ({ data }: gt.DataProps) => {
  const { closeModal, isCertificateModal } = useModal();

  const { level, sublevel } = data.author;

  const buttonHandler = () => {
    switch (isCertificateModal) {
      case true:
        return <CloseModalButton {...{ closeModal }} />;
      default:
        return <NavButton />;
    }
  };

  return (
    <div className={s.headerBlock}>
      <Container label={Label.PAGE}>
        <div className={s.headerContent}>
          <h1>{level}</h1>

          {sublevel.isActive && (
            <span className={s.sublevel}>{sublevel.level}</span>
          )}

          <div className={s.buttonBlock}>
            <DownloadPDF url={data.resume_pdf_url} />
            {buttonHandler()}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
