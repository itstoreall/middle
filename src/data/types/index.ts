export type Author = {
  firstName: string;
  secondName: string;
  profession: string;
  level: string;
};

export type Contacts = {
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

export type Data = {
  author: Author & Contacts;
  skills: Skill[];
  stack: Stack[];

  header: {
    logo: string;
  };

  main: {
    label: string;
    resume: {
      author: string;
      skills: string;
      stack: string;
    };
  };

  footer: {
    label: string;
  };
};
