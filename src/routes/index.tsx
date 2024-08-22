/* eslint-disable react-hooks/exhaustive-deps */
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from '../context/app';
import { ModalsProvider } from '../components/Modal/context';
import { PreloaderProvider } from '../context/preloader';
import * as gc from '../config/global';
import Layout from '../components/Layout';
import Resume from '../components/Pages/Resume';
import Portfolio from '../components/Pages/Portfolio';
import { DataProvider } from '../context/data';
import { Data } from '../data/types';
import content from '../data';
import { useEffect, useState } from 'react';
import { ToastProvider } from '../context/toast';

const { resume, portfolio } = gc.page;

const AppRoutes = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => content && setData(content), [content]);

  if (!data) return null;

  return (
    <HashRouter>
      <DataProvider {...{ data }}>
        <AppProvider>
          <ModalsProvider>
            <ToastProvider>
              <PreloaderProvider>
                <Routes>
                  <Route path={resume.path} element={<Layout />}>
                    <Route index element={<Resume />} />
                    <Route path={portfolio.path} element={<Portfolio />} />
                  </Route>
                </Routes>
              </PreloaderProvider>
            </ToastProvider>
          </ModalsProvider>
        </AppProvider>
      </DataProvider>
    </HashRouter>
  );
};

export default AppRoutes;
