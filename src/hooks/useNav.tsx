import { Link, useLocation } from 'react-router-dom';
import useApp from './useApp';
import * as gc from '../config/global';
import * as gt from '../types/global';

const { resume, portfolio } = gc.page;

const useNav = () => {
  const app = useApp();
  const location = useLocation();
  const pathname = location.pathname;

  const isResume = pathname === resume.path;
  const path = isResume ? portfolio.path : resume.path;
  const title = isResume ? portfolio.label : resume.label;

  const handleClick = (e: gt.LinkEvent) =>
    app.isPending() && e.preventDefault();

  const button = (
    <Link to={path} onClick={handleClick}>
      <span>{title}</span>
    </Link>
  );

  return { path, title, button };
};

export default useNav;
