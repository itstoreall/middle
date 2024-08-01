import useData from '../../../hooks/useData';
import s from './Resume.module.scss';

const SoftList = () => {
  const data = useData();

  if (!data) return null;

  const { soft } = data;

  return (
    <ul className={s.softList}>
      {soft.set.map((skill, idx) => (
        <li key={idx}>
          <span className={s.skill}>{skill}</span>
        </li>
      ))}
    </ul>
  );
};

export default SoftList;
