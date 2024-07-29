'use client'
import React, { createContext, useState, useContext, useCallback } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [ isModalOpen, setIsModalOpen] = useState(false);
  const [ modalTemplate, setModalTemplate] = useState(null);

  const openModal = useCallback((modalTemplateData) => {
    setIsModalOpen(true);
    setModalTemplate(modalTemplateData);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setModalTemplate(null);
  }, []);

  return (
    <ModalContext.Provider
      value={{ openModal, closeModal, isModalOpen, modalTemplate }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export function useModal() {
  return useContext(ModalContext);
}