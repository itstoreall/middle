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

export type Project = {
  title: string;
  url: string;
  source: string;
  img: string;
};

export type Data = {
  author: Author & Social;
  skills: Skill[];
  stack: Stack[];
  soft: Soft;
  projects: Project[];

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
    };
    portfolio: {
      projects: string;
    };
  };

  footer: {
    label: string;
  };
};
