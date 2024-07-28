import { Link, useLocation } from 'react-router-dom';
import * as gc from '../config/global';

const { resume, portfolio } = gc.page;

const useNav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isResume = pathname === resume.path;
  const path = isResume ? portfolio.path : resume.path;
  const title = isResume ? portfolio.label : resume.label;
  const button = <Link to={path}>{title}</Link>;

  const navConfig = { path, title, button };

  return navConfig;
};

export default useNav;