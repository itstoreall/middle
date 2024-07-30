import useData from '../../../hooks/useData';
import { SocialData } from './types';
import FacebookIcon from '../../../assets/icons/FacebookIcon';
import GitHubIcon from '../../../assets/icons/GitHubIcon';
import LinkedInIcon from '../../../assets/icons/LinkedInIcon';
import SocialButton from './SocialButton';
import s from './Resume.module.scss';

const ResumeContent = () => {
  const data = useData();

  if (!data) return null;

  const { firstName, secondName, profession, facebook, github, linkedin } =
    data.author;

  const socialData: SocialData[] = [
    { label: facebook.label, url: facebook.url, icon: <FacebookIcon /> },
    { label: github.label, url: github.url, icon: <GitHubIcon /> },
    { label: linkedin.label, url: linkedin.url, icon: <LinkedInIcon /> }
  ];

  return (
    <>
      <section className={s.authorSection}>
        <h2 className={s.author}>{`${firstName} ${secondName}`}</h2>
        <h3 className={s.profession}>{profession}</h3>
        <ul className={s.contactList}>
          {socialData.map(el => (
            <li>
              <SocialButton {...{ el, s }} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ResumeContent;
