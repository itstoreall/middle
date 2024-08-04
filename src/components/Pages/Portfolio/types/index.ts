import { Data } from '../../../../data/types';

export type ImageProps = {
  label: string;
  image: string;
  title: string;
  logo: string;
  data: Data;
};

export type ButtonProps = {
  url: string;
  title: string;
  isLock: boolean;
};
