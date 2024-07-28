/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutProps } from './types';
import content from '../../data';
import Container, { containerEnum } from '../Container';
import NavButton from '../NavButton';
import s from './Layout.module.scss';

const { Label } = containerEnum;

const Layout = () => {
  const [data, setData] = useState<LayoutProps>(null);

  useEffect(() => content && setData(content), [content]);

  if (!data) return null;

  return (
    <div className={s.wrapper}>
      <div className={s.layout}>
        <header>
          <Container label={Label.PAGE}>
            <NavButton />

            <div className={s.headerContent}>{'Logo'}</div>
          </Container>
        </header>

        <main>
          <Outlet />
        </main>

        <footer>
          <Container label={Label.PAGE}>
            <div className={s.footerContent}>Footer</div>
          </Container>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
