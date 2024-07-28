import { ChildrenProps } from '../../../types/global';
import { Label } from '../enum';

export type ContainerProps = ChildrenProps & {
  label: Label;
};
