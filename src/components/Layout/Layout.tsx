/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';
import usePreloader from '../../hooks/usePreloader';
import useModals from '../../hooks/useModal';
import useToast from '../../hooks/useToast';
import useData from '../../hooks/useData';
import useApp from '../../hooks/useApp';
import toastConfig from '../Toast/config';
import Header from '../Header';
import Footer from '../Footer';
import s from './Layout.module.scss';

const { position } = toastConfig.label;
const toastStartDelay = 120000;
// const toastStartDelay = 2000;

const Layout = () => {
  const { startPreloader } = usePreloader();
  const { addToast } = useToast();
  const data = useData();
  const app = useApp();

  useLayoutEffect(() => {
    app.isPending() && startPreloader();
  }, [app.status]);

  // /*
  useEffect(() => {
    const timeout = setTimeout(() => addToast(position), toastStartDelay);
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
