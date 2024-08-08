import * as gt from '../../types/global';
import Container, { containerEnum } from '../Container';
import DownloadPDF from '../PDF/Download';
import NavButton from '../NavButton';
import s from './Header.module.scss';

const { Label } = containerEnum;

const Header = ({ data }: gt.DataProps) => {
  const { level } = data.author;

  return (
    <div className={s.headerBlock}>
      <Container label={Label.PAGE}>
        <div className={s.headerContent}>
          <h1>{level}</h1>
          <div className={s.buttonBlock}>
            <DownloadPDF url={data.resume_pdf_url} />
            <NavButton />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
