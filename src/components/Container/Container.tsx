import * as t from './types';
import s from './Container.module.scss';

const Container = ({ label, children }: t.ContainerProps) => (
  <div className={`${s.container} ${s[label]}`}>{children}</div>
);

export default Container;
