import { HashRouter, Routes, Route } from 'react-router-dom';
import { ModalsProvider } from '../components/Modal/context';
import * as gc from '../config/global';
import Layout from '../components/Layout';
import Resume from '../components/Pages/Resume';
import Portfolio from '../components/Pages/Portfolio';
import { AppProvider } from '../context/app';

const { resume, portfolio } = gc.page;

const AppRoutes = () => (
  <HashRouter>
    <AppProvider>
      <ModalsProvider>
        <Routes>
          <Route path={resume.path} element={<Layout />}>
            <Route index element={<Resume />} />
            <Route path={portfolio.path} element={<Portfolio />} />
          </Route>
        </Routes>
      </ModalsProvider>
    </AppProvider>
  </HashRouter>
);

export default AppRoutes;
