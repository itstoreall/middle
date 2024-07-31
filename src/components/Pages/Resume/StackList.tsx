import useData from '../../../hooks/useData';
import s from './Resume.module.scss';

const StackList = () => {
  const data = useData();

  if (!data) return null;

  const { stack } = data;

  return (
    <ul className={s.stackList}>
      {stack.map(tech => (
        <li key={tech.label}>
          <h3 className={s.stackTitle}>{tech.label}</h3>
          <span className={s.subtitle}>{'most often used'}</span>

          <ul className={s.techList}>
            {tech.set.map(el => (
              <li>
                <span className={s.tech}>{el}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default StackList;
