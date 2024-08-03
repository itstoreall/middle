import useData from '../../../hooks/useData';
import { Projects } from '../../../data/types';
import ProjectList from './ProjectList';
import s from './Portfolio.module.scss';

const PortfolioContent = () => {
  const data = useData();

  if (!data) return null;

  const { portfolio, projects } = data;
  const { frontend, fullstack, backend } = data.main.portfolio;

  return (
    <>
      <section className={s.heroSection}>
        <h1 className={s.portpolio}>{portfolio.title}</h1>
        <h2 className={s.subtitle}>{portfolio.subtitle}</h2>
      </section>

      {projects.frontend.length ? (
        <section className={s.projectSection}>
          <h2 className={s.title}>{frontend}</h2>
          <ProjectList label={frontend as keyof Projects} />
        </section>
      ) : null}

      {projects.fullstack.length ? (
        <section className={s.projectSection}>
          <h2 className={s.title}>{fullstack}</h2>
          <ProjectList label={fullstack as keyof Projects} />
        </section>
      ) : null}

      {projects.backend.length ? (
        <section className={s.projectSection}>
          <h2 className={s.title}>{backend}</h2>
          <ProjectList label={backend as keyof Projects} />
        </section>
      ) : null}
    </>
  );
};

export default PortfolioContent;
