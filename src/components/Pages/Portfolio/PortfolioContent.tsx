import useData from '../../../hooks/useData';
import ProjectList from './ProjectList';
import s from './Portfolio.module.scss';

const PortfolioContent = () => {
  const data = useData();

  if (!data) return null;

  const { portfolio } = data;
  const { frontend } = data.main.portfolio;

  return (
    <>
      <section className={s.heroSection}>
        <h1 className={s.portpolio}>{portfolio.title}</h1>
        <h2 className={s.subtitle}>{portfolio.subtitle}</h2>
      </section>

      <section className={s.projectSection}>
        <h2 className={s.title}>{frontend}</h2>
        <ProjectList />
      </section>
    </>
  );
};

export default PortfolioContent;
