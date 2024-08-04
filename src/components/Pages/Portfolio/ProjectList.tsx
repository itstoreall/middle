import useData from '../../../hooks/useData';
import { ButtonProps, ImageProps } from './types';
import { ProjectData, Projects } from '../../../data/types';
import frontend_01 from '../../../assets/images/frontend_01.png';
import frontend_02 from '../../../assets/images/frontend_02.png';
import frontend_03 from '../../../assets/images/frontend_03.png';
import frontend_04 from '../../../assets/images/frontend_04.png';
import fullstack_01 from '../../../assets/images/fullstack_01.png';
import fullstack_02 from '../../../assets/images/fullstack_02.png';
import fullstack_03 from '../../../assets/images/fullstack_03.png';
import empty_white from '../../../assets/images/empty_white.png';
import LockIcon from '../../../assets/icons/LockIcon/LockIcon';
import GraphQLIcon from '../../../assets/icons/GraphQLIcon';
import NodeJsIcon from '../../../assets/icons/NodeJsIcon';
import ApolloIcon from '../../../assets/icons/ApolloIcon';
import CodeIcon from '../../../assets/icons/CodeIcon';
import s from './Portfolio.module.scss';

const Image = ({ label, image, title, logo, data }: ImageProps) => {
  const { backend } = data.main.portfolio;
  const isBackend = label === backend;

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

const ProjectList = ({ label }: { label: keyof Projects }) => {
  const data = useData();

  if (!data) return null;

  const images = [
    frontend_01,
    frontend_02,
    frontend_03,
    frontend_04,
    fullstack_01,
    fullstack_02,
    fullstack_03
  ];

  const { projects } = data as ProjectData;
  const { backend } = data.main.portfolio;

  return (
    <ul className={s.projectList}>
      {projects[label].map((el, idx) => {
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
                  logo={label === backend ? el.img : ''}
                  data={data}
                />
              </div>
            </div>

            <div className={s.metaBlock}>
              <h3 className={s.title}>{el.title}</h3>
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
