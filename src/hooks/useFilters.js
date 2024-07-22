'use client'
import React, { createContext, useState, useContext, useMemo } from 'react';

const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const [filter, setFilter] = useState({ filter: 'all', urls: 'all'});

  const value = useMemo(
    () => ({
      filter, setFilter,
    }),
    [
      filter, setFilter,
    ]
  )

  return (
    <FiltersContext.Provider
      value={value}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export function useFilters() {
  return useContext(FiltersContext);
}