export type Author = {
  firstName: string;
  secondName: string;
  level: string;
};

export type Data = {
  author: Author;

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
