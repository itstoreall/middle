import useModal from '../../hooks/useModal';
import { CloseButtonProps } from '../Modal/types';
import * as gt from '../../types/global';
import Container, { containerEnum } from '../Container';
import DownloadPDF from '../PDF/Download';
import NavButton from '../NavButton';
import s from './Header.module.scss';

const { Label } = containerEnum;

const CloseModalButton = ({ closeModal }: CloseButtonProps) => (
  <button className={s.closeModalButton} onClick={closeModal} title={'close'}>
    <span className={s.buttonContent}>
      <span>{'close'}</span>
    </span>
  </button>
);

const Header = ({ data }: gt.DataProps) => {
  const { closeModal, isCertificateModal } = useModal();

  const { level } = data.author;

  return (
    <div className={s.headerBlock}>
      <Container label={Label.PAGE}>
        <div className={s.headerContent}>
          <h1>{level}</h1>
          <div className={s.buttonBlock}>
            <DownloadPDF url={data.resume_pdf_url} />
            {isCertificateModal ? (
              <CloseModalButton {...{ closeModal }} />
            ) : (
              <NavButton />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
