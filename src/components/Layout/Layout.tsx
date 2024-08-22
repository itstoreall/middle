/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
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
import useToast from '../../hooks/useToast';
// import usePreloader from '../../hooks/usePreloader';

import toastConfig from '../Toast/config';

// const { position } = toastConfig.label;
// const toastStartDelay = 120000;
// const toastStartDelay = 2000;

const Layout = () => {
  const data = useData();
  const app = useApp();
  const { startPreloader } = usePreloader();

  useLayoutEffect(() => {
    app.isPending() && startPreloader();
  }, [app.status]);

  /*
  const { addToast } = useToast();

  useEffect(() => {
    const timeout = setTimeout(() => addToast(position), toastStartDelay);
    // setTimeout(() => addToast('error'), 15000); // *
    return () => clearTimeout(timeout);
  }, []);
  // */

  const { RenderModal, isCertificateModal } = useModals();
  const headerRef = useScrollToTop();

  if (!data) return null;

  const scrollStyle = isCertificateModal ? s.hidden : s.scroll;
  const wrapperStyle = `${s.wrapper} ${scrollStyle}`;

  return (
    <div className={wrapperStyle}>
      <div className={s.layout}>
        <header ref={headerRef}>
          <Header {...{ data }} />
        </header>

        {!app.isPending() && (
          <>
            <main>
              <Outlet />
            </main>

            <footer>
              <Footer {...{ data }} />
            </footer>
          </>
        )}

        <RenderModal />
      </div>
    </div>
  );
};

export default Layout;
