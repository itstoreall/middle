/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { LayoutProps } from './types';
import content from '../../data';
import Container, { containerEnum } from '../Container';
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
            <div className={s.headerContent}>{'Logo'}</div>
          </Container>
        </header>

        <main>
          <Container label={Label.PAGE}>
            <div className={s.mainContent}>Main</div>
          </Container>
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
