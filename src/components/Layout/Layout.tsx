import s from './Layout.module.scss';

const Layout = () => (
  <div className={s.wrapper}>
    <div className={s.layout}>
      <header>
        <div className={s.headerContent}>Header</div>
      </header>

      <main>
        <div className={s.mainContent}>Main</div>
      </main>

      <footer>
        <div className={s.footerContent}>Footer</div>
      </footer>
    </div>
  </div>
);

export default Layout;
