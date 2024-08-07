import useData from '../../../hooks/useData';
import ProgressBar from '../../ProgressBar';
import s from './Resume.module.scss';

const SkillList = () => {
  const data = useData();

  if (!data) return null;

  const { skills } = data;

  return (
    <ul className={s.skillList}>
      {skills.set.map(skill => (
        <li key={skill.label}>
          <h3 className={s.skillTitle}>{skill.label}</h3>
          <div className={s.progressBox}>
            <ProgressBar percent={skill.percent} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
