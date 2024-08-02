import useData from '../../../hooks/useData';
import ProjectList from './ProjectList';
import s from './Portfolio.module.scss';

const PortfolioContent = () => {
  const data = useData();

  if (!data) return null;

  // const { firstName, secondName, profession } = data.author;

  return (
    <>
      <section className={s.projectSection}>
        <h2 className={s.title}>{'projects'}</h2>
        <ProjectList />
      </section>
    </>
  );
};

export default PortfolioContent;
