import { FC, createContext, ReactNode } from 'react';
import { Data } from '../data/types';

type OutletProps = { data: Data; children: ReactNode };

export const DataContext = createContext<Data | null>(null);

export const DataProvider: FC<OutletProps> = ({ data, children }) => (
  <DataContext.Provider value={data}>{children}</DataContext.Provider>
);
