import useNav from '../../hooks/useNav';
import s from './NavButton.module.scss';

const NavButton = () => {
  const { button } = useNav();
  return <nav className={s.nav}>{button}</nav>;
};

export default NavButton;
