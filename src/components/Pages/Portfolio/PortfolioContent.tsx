/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, useState } from 'react';
import useModal from '../../../hooks/useModal';
import useData from '../../../hooks/useData';
import ProjectList from './ProjectList';
import s from './Portfolio.module.scss';

const PortfolioContent = () => {
  const [isProjects, setIsProjects] = useState(false);

  const data = useData();

  const { openModal, modaContentEnum } = useModal();

  const startPreloader = () => openModal(modaContentEnum.PRELOADER);

  useLayoutEffect(() => {
    startPreloader();
    setTimeout(() => setIsProjects(true), 500);
  }, []);

  if (!data) return null;

  const { portfolio, projects } = data;
  const { frontend, fullstack, backend } = projects;

  if (!isProjects) return null;

  return (
    <>
      <section className={s.heroSection}>
        <h1 className={s.portpolio}>{portfolio.title}</h1>
        <h2 className={s.subtitle}>{portfolio.subtitle}</h2>
      </section>

      {projects.frontend.set.length ? (
        <section className={s.projectSection}>
          <h2 className={s.title}>{projects.frontend.label}</h2>
          <ProjectList label={frontend.label} />
        </section>
      ) : null}

      {projects.fullstack.set.length ? (
        <section className={s.projectSection}>
          <h2 className={s.title}>{fullstack.label}</h2>
          <ProjectList label={fullstack.label} />
        </section>
      ) : null}

      {projects.backend.set.length ? (
        <section className={s.projectSection}>
          <h2 className={s.title}>{backend.label}</h2>
          <ProjectList label={backend.label} />
        </section>
      ) : null}
    </>
  );
};

export default PortfolioContent;
