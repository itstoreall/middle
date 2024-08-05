import useData from '../../../hooks/useData';
import s from './Resume.module.scss';

const EmploymentBlock = () => {
  const data = useData();

  if (!data) return null;

  const { employment } = data;

  return (
    <ul className={s.jobList}>
      {employment.set.map((job, idx) => {
        return (
          <li key={idx}>
            <span className={s.job}>
              <span className={s.position}>{job.position}</span>
              <span className={s.company}>{`at ${job.company}`}</span>
            </span>

            <span className={s.term}>
              <span className={s.start}>{job.start}</span>
              <span className={s.end}>{`- ${job.end || 'up to now'}`}</span>
            </span>

            <span className={s.description}>
              <span className={s.description}>{job.description}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default EmploymentBlock;
