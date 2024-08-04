import useData from '../../../hooks/useData';
import avatar from '../../../assets/images/avatar.jpg';
import s from './Resume.module.scss';

const AboutBlock = () => {
  const data = useData();

  if (!data) return null;

  const { firstName, secondName } = data.author;
  const author = `${firstName} ${secondName}`;

  return (
    <div className={s.aboutBlock}>
      <div className={s.thumb}>
        <img src={avatar} alt={author} />
      </div>

      <div className={s.metaBlock}>
        {data.about.text.map((str, idx) => (
          <p key={idx}>{idx === 0 ? `${str} ${author}.` : str}</p>
        ))}
      </div>
    </div>
  );
};

export default AboutBlock;
