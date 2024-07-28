import { HashRouter, Routes, Route } from 'react-router-dom';
import * as gc from '../config/global';
import Layout from '../components/Layout';
import Resume from '../components/Pages/Resume';
import Portfolio from '../components/Pages/Portfolio';

const { resume, portfolio } = gc.page;

const AppRoutes = () => (
  <HashRouter>
    <Routes>
      <Route path={resume.path} element={<Layout />}>
        <Route index element={<Resume />} />
        <Route path={portfolio.path} element={<Portfolio />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default AppRoutes;
