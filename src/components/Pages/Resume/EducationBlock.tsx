import useData from '../../../hooks/useData';
import s from './Resume.module.scss';

const EducationBlock = () => {
  const data = useData();

  if (!data) return null;

  const { education } = data;

  return (
    <ul className={s.knowledgeList}>
      {education.set.map((knowledge, idx) => {
        const { subject, institution, start, end } = knowledge;
        return (
          <li key={idx}>
            <span className={s.knowledge}>
              <span className={s.subject}>{subject}</span>
            </span>

            <span className={s.term}>
              <span className={s.start}>{start}</span>
              <span className={s.end}>{`- ${end || 'up to now'}`}</span>
            </span>

            <span className={s.institution}>{institution}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default EducationBlock;
