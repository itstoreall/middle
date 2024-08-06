import useData from '../../../hooks/useData';
import SocialButtons from './SocialButtons';
import SkillList from './SkillList';
import StackList from './StackList';
import SoftList from './SoftList';
import AboutBlock from './AboutBlock';
import EmploymentBlock from './EmploymentBlock';
import EducationBlock from './EducationBlock';
import s from './Resume.module.scss';

const ResumeContent = () => {
  const data = useData();

  if (!data) return null;

  const { firstName, secondName, profession } = data.author;
  const { skills, stack, soft, about, employment, education } =
    data.main.resume;

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

      <section className={s.aboutSection}>
        <h2 className={s.title}>{about}</h2>
        <AboutBlock />
      </section>

      <section className={s.employmentSection}>
        <h2 className={s.title}>{employment}</h2>
        <EmploymentBlock />
      </section>

      <section className={s.educationSection}>
        <h2 className={s.title}>{education}</h2>
        <EducationBlock />
      </section>
    </>
  );
};

export default ResumeContent;
