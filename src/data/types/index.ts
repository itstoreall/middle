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

export type Data = {
  author: Author & Contacts;
  skills: Skill[];

  header: {
    logo: string;
  };

  main: {
    label: string;
    resume: {
      author: string;
      skills: string;
    };
  };

  footer: {
    label: string;
  };
};
