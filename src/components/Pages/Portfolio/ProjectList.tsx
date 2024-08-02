import useData from '../../../hooks/useData';
import s from './Portfolio.module.scss';

import project_01 from '../../../assets/images/project_01.jpg';

const ProjectList = () => {
  const data = useData();

  console.log('data', data);

  // const images = [{ project: project_01 }, { project: project_02 }];

  if (!data) return null;

  const { projects } = data;

  return (
    <ul className={s.projectList}>
      {projects.map((project, idx) => {
        // const image = images.find(img => {
        //   console.log(img.project.includes('project_01'));
        //   return img.project.includes('project_01');
        // });

        return (
          <li key={idx}>
            <div className={s.projectContent}>
              <div className={s.thumb}>
                <img src={project_01} alt={project.title} />
              </div>
            </div>
            <h3 className={s.skillTitle}>{project.title}</h3>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;
