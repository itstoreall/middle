import useData from '../../../hooks/useData';
import { SocialData } from './types';
import FacebookIcon from '../../../assets/icons/FacebookIcon';
import GitHubIcon from '../../../assets/icons/GitHubIcon';
import LinkedInIcon from '../../../assets/icons/LinkedInIcon';
import s from './Resume.module.scss';

const SocialButtons = () => {
  const data = useData();

  if (!data) return null;

  const { facebook, github, linkedin } = data.author;

  const socialData: SocialData[] = [
    { label: facebook.label, url: facebook.url, icon: <FacebookIcon /> },
    { label: github.label, url: github.url, icon: <GitHubIcon /> },
    { label: linkedin.label, url: linkedin.url, icon: <LinkedInIcon /> }
  ];

  return (
    <ul className={s.socialList}>
      {socialData.map(el => (
        <li key={el.label}>
          <a
            className={`${s.socialButton} ${s[el.label]}`}
            href={el.url}
            target='_blank'
            rel='noreferrer'
            title={el.label}
          >
            {el.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialButtons;
