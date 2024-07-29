import * as gt from '../../types/global';
import Container, { containerEnum } from '../Container';
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
          <NavButton />
        </div>
      </Container>
    </div>
  );
};

export default Header;
