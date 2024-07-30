export type Author = {
  firstName: string;
  secondName: string;
  profession: string;
  level: string;
};

export type SocialUrl = {
  mob: string;
  desk: string;
};

export type Contacts = {
  facebook: {
    label: string;
    url: SocialUrl;
  };
  github: {
    label: string;
    url: SocialUrl;
  };
  linkedin: {
    label: string;
    url: SocialUrl;
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
