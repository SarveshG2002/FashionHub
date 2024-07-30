import React, { createContext } from 'react';
// import { getAllbrands, getAllCategories } from '../api'; // import your functions
import {getAllbrands,getAllCategories} from '../components/CommonData';

export const CommonDataContext = createContext();

export const CommonDataProvider = ({ children }) => {
  return (
    <CommonDataContext.Provider value={{ getAllbrands, getAllCategories }}>
      {children}
    </CommonDataContext.Provider>
  );
};
