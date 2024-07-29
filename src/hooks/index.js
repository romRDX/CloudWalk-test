'use client'
import React from 'react';
import { SquadsProvider } from './useSquads';
import { ModalProvider } from './useModal';

const AppProvider = ({ children }) => {
  
  return (
    <SquadsProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </SquadsProvider>
  )
};

export default AppProvider;