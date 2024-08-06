import useData from '../../../hooks/useData';
import s from './Resume.module.scss';

const EmploymentBlock = () => {
  const data = useData();

  if (!data) return null;

  const { employment } = data;

  return (
    <ul className={s.jobList}>
      {employment.set.map((job, idx) => {
        const { position, company, description, start, end } = job;
        return (
          <li key={idx}>
            <span className={s.job}>
              <span className={s.position}>{position}</span>
              <span className={s.company}>{`at ${company}`}</span>
            </span>

            <span className={s.term}>
              <span className={s.start}>{start}</span>
              <span className={s.end}>{`- ${end || 'up to now'}`}</span>
            </span>

            <span className={s.description}>
              <span className={s.description}>{description}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default EmploymentBlock;
