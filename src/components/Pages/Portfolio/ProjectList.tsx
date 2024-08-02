import useData from '../../../hooks/useData';
import project_01 from '../../../assets/images/project_01.png';
import project_02 from '../../../assets/images/project_02.png';
import s from './Portfolio.module.scss';

const Button = ({ url, title }: { url: string; title: string }) => (
  <a href={url} target='_blank' rel='noreferrer'>
    {title}
  </a>
);

const ProjectList = () => {
  const data = useData();

  if (!data) return null;

  const images = [project_01, project_02];

  const { projects } = data;

  return (
    <ul className={s.projectList}>
      {projects.map((project, idx) => {
        const image = images.find(img => img.includes(project.img));
        return (
          <li key={idx}>
            <div className={s.imageBlock}>
              <div className={s.thumb}>
                <img src={image} alt={project.title} />
              </div>
            </div>
            <div className={s.metaBlock}>
              <h3 className={s.title}>{project.title}</h3>
              <span className={s.buttonBox}>
                <Button url={project.url} title={'preview'} />
                <Button url={project.source} title={'source'} />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
