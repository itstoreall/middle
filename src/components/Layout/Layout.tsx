/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useModals from '../../hooks/useModal';
import useScrollToTop from '../../hooks/useScrollToTop';
// import { DataProvider } from '../../context/data';
// import { ToastProvider } from '../../context/toast';
// import { Data } from '../../data/types';
// import content from '../../data';
import Header from '../Header';
import Footer from '../Footer';
import s from './Layout.module.scss';
// import { Data } from '../../data/types';
import useData from '../../hooks/useData';
import useApp from '../../hooks/useApp';
import usePreloader from '../../hooks/usePreloader';
// import usePreloader from '../../hooks/usePreloader';

const Layout = () => {
  const data = useData();
  const app = useApp();
  const { startPreloader } = usePreloader();
  const location = useLocation();

  useLayoutEffect(() => {
    app.isPending() && startPreloader();
  }, [location.pathname]);

  /*
  const { addToast } = useToast();

  useEffect(() => {
    setTimeout(() => addToast(position), toastStartDelay);
    // setTimeout(() => addToast('error'), 15000); // *
  }, []);
  */

  const { modal, RenderModal } = useModals();
  const headerRef = useScrollToTop();

  // useEffect(() => content && setData(content), [content]);

  if (!data || app.isPending()) return <RenderModal />;

  const wrapperStyle = `${s.wrapper} ${modal ? '' : s.scroll}`;

  return (
    <div className={wrapperStyle}>
      <div className={s.layout}>
        <header ref={headerRef}>
          <Header {...{ data }} />
        </header>

        <main>
          {/* <ToastProvider> */}
          <Outlet />
          {/* </ToastProvider> */}
        </main>

        <footer>
          <Footer {...{ data }} />
        </footer>

        {/* <RenderModal /> */}
      </div>
    </div>
  );
};

export default Layout;
