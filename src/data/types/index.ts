export type Author = {
  firstName: string;
  secondName: string;
  profession: string;
  level: string;
};

export type Social = {
  facebook: {
    label: string;
    url: string;
  };
  github: {
    label: string;
    url: string;
  };
  linkedin: {
    label: string;
    url: string;
  };
};

export type Skill = { label: string; percent: number };

export type Stack = {
  label: string;
  set: {
    often: string[];
    familiar: string[];
  };
};

export type Soft = {
  label: string;
  set: string[];
};

export type About = {
  label: string;
  text: string[];
};

export type Job = {
  position: string;
  company: string;
  start: string;
  end: string;
  description: string;
};

export type Employment = {
  label: string;
  set: Job[];
};

export type Subject = {
  subject: string;
  institution: string;
  start: string;
  end: string;
};

export type Education = {
  label: string;
  set: Subject[];
};

export type Portfolio = {
  title: string;
  subtitle: string;
};

export type Project = {
  title: string;
  url: string;
  src_ui: string;
  src_api: string;
  img: string;
  ui_password: boolean;
  status: boolean;
};

export type Projects = {
  frontend: Project[];
  fullstack: Project[];
  backend: Project[];
};

export type ProjectData = { projects: Projects };

export type Data = {
  author: Author & Social;
  skills: Skill[];
  stack: Stack[];
  soft: Soft;
  about: About;
  portfolio: Portfolio;
  employment: Employment;
  education: Education;

  header: {
    logo: string;
  };

  main: {
    label: string;
    resume: {
      author: string;
      skills: string;
      stack: string;
      soft: string;
      about: string;
      employment: string;
      education: string;
    };
    portfolio: {
      frontend: string;
      backend: string;
      fullstack: string;
    };
  };

  footer: {
    label: string;
  };
} & ProjectData;
