import React, { createContext, useContext, ReactNode } from 'react';
import { WorkerWithLogs } from '../models/api.model';

const DataContext = createContext<WorkerWithLogs[]>([]);

export const DataProvider: React.FC<{ data: WorkerWithLogs[]; children: ReactNode }> = ({ data, children }) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
