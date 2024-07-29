import * as gt from '../../types/global';
import s from './Footer.module.scss';

const Copyirght = ({ data }: gt.DataProps) => {
  const { firstName, secondName } = data.author;

  return (
    <div className={s.copyrightBlock}>
      <span>{`${firstName} ${secondName}`}</span>
      <span>&copy;</span>
      <time>{new Date().getFullYear()}</time>
    </div>
  );
};

export default Copyirght;
