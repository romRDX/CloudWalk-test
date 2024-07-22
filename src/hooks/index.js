'use client'
import React from 'react';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const AppProvider = ({ children }) => {
 
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        keepPreviousData : true
      }
    }
  });
  
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
};

export default AppProvider;