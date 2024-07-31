/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Data } from '../../data/types';
import { DataProvider } from '../../context/data';
import content from '../../data';
import Header from '../Header';
import Footer from '../Footer';
import s from './Layout.module.scss';

const Layout = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => content && setData(content), [content]);

  if (!data) return null;

  return (
    <div className={s.wrapper}>
      <div className={s.layout}>
        <header>
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
      </div>
    </div>
  );
};

export default Layout;
