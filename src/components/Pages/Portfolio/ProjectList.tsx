import useData from '../../../hooks/useData';
import { ButtonProps, ImageProps } from './types';
import { ProjectData, Projects, ProjectSetIem } from '../../../data/types';
import hero_01 from '../../../assets/images/hero_01.png';
import frontend_01 from '../../../assets/images/frontend_01.png';
import frontend_02 from '../../../assets/images/frontend_02.png';
import frontend_03 from '../../../assets/images/frontend_03.png';
import frontend_04 from '../../../assets/images/frontend_04.png';
import fullstack_01 from '../../../assets/images/fullstack_01.jpg';
import fullstack_02 from '../../../assets/images/fullstack_02.png';
import fullstack_03 from '../../../assets/images/fullstack_03.png';
import empty_white from '../../../assets/images/empty_white.png';
import GraphQLIcon from '../../../assets/icons/GraphQLIcon';
import NodeJsIcon from '../../../assets/icons/NodeJsIcon';
import ApolloIcon from '../../../assets/icons/ApolloIcon';
import CodeIcon from '../../../assets/icons/CodeIcon';
import LockIcon from '../../../assets/icons/LockIcon';
import s from './Portfolio.module.scss';

type MetaInformationProps = {
  project: ProjectSetIem;
  isHero: boolean;
};

const Image = ({ label, image, title, logo, data }: ImageProps) => {
  const { backend } = data.projects;
  const isBackend = label === backend.label;

  const logosNumber = isBackend
    ? logo.split(/_+/).filter(part => part !== '').length
    : 0;

  const backendLogoHandler = () =>
    logosNumber === 3 ? (
      <>
        <NodeJsIcon />
        <ApolloIcon />
        <GraphQLIcon />
      </>
    ) : (
      <NodeJsIcon />
    );

  const previewImageHandler = () =>
    image ? (
      <img src={image} alt={title} />
    ) : (
      <div className={s.emptyBlock}>
        <img src={empty_white} alt={'empty white'} />
        <span className={s.logoBox}>
          <CodeIcon />
        </span>
      </div>
    );

  return isBackend ? (
    <div className={s.emptyBlock}>
      <img src={empty_white} alt={'empty white'} />
      <span className={s.logoBox}>{backendLogoHandler()}</span>
    </div>
  ) : (
    previewImageHandler()
  );
};

const MetaInformation = ({ project, isHero }: MetaInformationProps) => {
  return isHero ? (
    <>
      {project.description?.map((line, idx) => (
        <p key={idx} className={s.descriptionLine}>
          {line}
        </p>
      ))}
    </>
  ) : (
    <h3 className={s.title}>{project.title}</h3>
  );
};

const Button = ({ url, title, isLock }: ButtonProps) => {
  if (!url) return null;

  const isLockStyle = isLock ? s.locked : '';

  return (
    <a className={isLockStyle} href={url} target='_blank' rel='noreferrer'>
      {isLock && <LockIcon />}
      <span>{title}</span>
    </a>
  );
};

const ProjectList = ({ label }: { label: string }) => {
  const data = useData();

  if (!data) return null;

  const images = [
    hero_01,
    frontend_01,
    frontend_02,
    frontend_03,
    frontend_04,
    fullstack_01,
    fullstack_02,
    fullstack_03
  ];

  const { projects } = data as ProjectData;
  const { hero, backend } = data.projects;
  const isHero = label === hero.label;

  return (
    <ul className={s.projectList}>
      {projects[label as keyof Projects].set.map((el, idx) => {
        if (!el.status) return null;

        const image = images.find(img => el.img && img.includes(el.img));
        const isLockedUI = el.ui_password;
        const noImageStyle = !image ? s.empty : '';

        return (
          <li key={idx}>
            <div className={s.imageBlock}>
              <div className={`${s.thumb} ${noImageStyle}`}>
                <Image
                  label={label}
                  image={image ?? ''}
                  title={el.title}
                  logo={label === backend.label ? el.img : ''}
                  data={data}
                />
              </div>
            </div>

            <div className={s.metaBlock}>
              <MetaInformation isHero={isHero} project={el} />

              <span className={s.buttonBlock}>
                {el.url && (
                  <Button url={el.url} title={'view'} isLock={isLockedUI} />
                )}
                {el.src_ui && (
                  <Button url={el.src_ui} title={'ui src'} isLock={false} />
                )}
                {el.src_api && (
                  <Button url={el.src_api} title={'api src'} isLock={false} />
                )}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
