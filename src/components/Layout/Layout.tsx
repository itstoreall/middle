/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useModals from '../../hooks/useModal';
import useScrollToTop from '../../hooks/useScrollToTop';
import { DataProvider } from '../../context/data';
import { Data } from '../../data/types';
import content from '../../data';
import Header from '../Header';
import Footer from '../Footer';
import s from './Layout.module.scss';

const Layout = () => {
  const [data, setData] = useState<Data | null>(null);
  const headerRef = useScrollToTop();

  const { RenderModal } = useModals();

  useEffect(() => content && setData(content), [content]);

  if (!data) return null;

  return (
    <div className={s.wrapper}>
      <div className={s.layout}>
        <header ref={headerRef}>
          <Header {...{ data }} />
        </header>

        <main>
          <DataProvider {...{ data }}>
            <Outlet />
          </DataProvider>
        </main>

        <footer>
          <Footer {...{ data }} />
        </footer>

        <RenderModal />
      </div>
    </div>
  );
};

export default Layout;
