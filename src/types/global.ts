import { ReactNode } from 'react';
import { Data } from '../data/types';

export type ChildrenProps = { children: ReactNode };

export type ButtonEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export type SwipeEvent = React.TouchEvent<HTMLDivElement>;

export type DataProps = { data: Data };
