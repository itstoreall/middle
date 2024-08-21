import useData from '../../../hooks/useData';
import SocialButtons from './SocialButtons';
import SkillList from './SkillList';
import StackList from './StackList';
import SoftList from './SoftList';
import AboutBlock from './AboutBlock';
import EmploymentBlock from './EmploymentBlock';
import EducationBlock from './EducationBlock';
import CertificateBlock from './CertificateBlock';
import s from './Resume.module.scss';

const ResumeContent = () => {
  const data = useData();

  if (!data) return null;

  const { author, skills, stack, soft, about } = data;
  const { employment, education, certificates } = data;
  const { firstName, secondName, profession } = author;

  return (
    <>
      <section className={s.authorSection}>
        <h1 className={s.author}>{`${firstName} ${secondName}`}</h1>
        <h2 className={s.profession}>{profession}</h2>
        <SocialButtons />
      </section>

      <section className={s.skilsSection}>
        <h2 className={s.title}>{skills.label}</h2>
        <SkillList />
      </section>

      <section className={s.stackSection}>
        <h2 className={s.title}>{stack.label}</h2>
        <StackList />
      </section>

      <section className={s.softSection}>
        <h2 className={s.title}>{soft.label}</h2>
        <SoftList />
      </section>

      <section className={s.aboutSection}>
        <h2 className={s.title}>{about.label}</h2>
        <AboutBlock />
      </section>

      <section className={s.employmentSection}>
        <h2 className={s.title}>{employment.label}</h2>
        <EmploymentBlock />
      </section>

      <section className={s.educationSection}>
        <h2 className={s.title}>{education.label}</h2>
        <EducationBlock />
      </section>

      <section className={s.certificateSection}>
        <h2 className={s.title}>{certificates.label}</h2>
        <CertificateBlock />
      </section>
    </>
  );
};

export default ResumeContent;
