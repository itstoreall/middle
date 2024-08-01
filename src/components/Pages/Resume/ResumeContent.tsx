import useData from '../../../hooks/useData';
import SocialButtons from './SocialButtons';
import SkillList from './SkillList';
import s from './Resume.module.scss';
import StackList from './StackList';
import SoftList from './SoftList';

const ResumeContent = () => {
  const data = useData();

  if (!data) return null;

  const { firstName, secondName, profession } = data.author;
  const { skills, stack, soft } = data.main.resume;

  return (
    <>
      <section className={s.authorSection}>
        <h1 className={s.author}>{`${firstName} ${secondName}`}</h1>
        <h2 className={s.profession}>{profession}</h2>
        <SocialButtons />
      </section>

      <section className={s.skilsSection}>
        <h2 className={s.title}>{skills}</h2>
        <SkillList />
      </section>

      <section className={s.stackSection}>
        <h2 className={s.title}>{stack}</h2>
        <StackList />
      </section>

      <section className={s.softSection}>
        <h2 className={s.title}>{soft}</h2>
        <SoftList />
      </section>
    </>
  );
};

export default ResumeContent;
