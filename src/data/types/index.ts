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

export type Data = {
  author: Author & Contacts;

  header: {
    logo: string;
  };

  main: {
    label: string;
  };

  footer: {
    label: string;
  };
};
