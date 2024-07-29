import * as gt from '../../types/global';
import Container, { containerEnum } from '../Container';
import Copyirght from './Copyright';
import s from './Footer.module.scss';

const { Label } = containerEnum;

const Footer = ({ data }: gt.DataProps) => (
  <Container label={Label.PAGE}>
    <div className={s.footerContent}>
      <Copyirght {...{ data }} />
    </div>
  </Container>
);

export default Footer;
