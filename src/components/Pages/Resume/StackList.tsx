import useData from '../../../hooks/useData';
import s from './Resume.module.scss';

const StackList = () => {
  const data = useData();

  if (!data) return null;

  const { stack } = data;

  return (
    <ul className={s.stackList}>
      {stack.map(tech => {
        const { often, familiar } = tech.set;

        return (
          <li key={tech.label}>
            <h3 className={s.stackTitle}>{tech.label}</h3>

            <div className={s.techBlock}>
              {often.length ? (
                <div className={`${s.setBox} ${s.often}`}>
                  <span className={s.subtitle}>{'Most often used:'}</span>
                  <ul className={s.techList}>
                    {often.map((el, idx) => (
                      <li key={idx}>
                        <span className={s.tech}>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {familiar.length ? (
                <div className={`${s.setBox} ${s.familiar}`}>
                  <span className={s.subtitle}>{'Familiar with:'}</span>
                  <ul className={s.techList}>
                    {familiar.map((el, idx) => (
                      <li key={idx}>
                        <span className={s.tech}>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default StackList;
