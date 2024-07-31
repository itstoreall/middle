import useData from '../../../hooks/useData';
import SocialButtons from './SocialButtons';
import SkillList from './SkillList';
import s from './Resume.module.scss';

const ResumeContent = () => {
  const data = useData();

  if (!data) return null;

  const { firstName, secondName, profession } = data.author;
  const { skills } = data.main.resume;

  return (
    <>
      <section className={s.authorSection}>
        <h1 className={s.author}>{`${firstName} ${secondName}`}</h1>
        <h2 className={s.profession}>{profession}</h2>
        <SocialButtons />
      </section>

      <section className={s.skilsSection}>
        <h2 className={s.skills}>{skills}</h2>
        <SkillList />
      </section>
    </>
  );
};

export default ResumeContent;
