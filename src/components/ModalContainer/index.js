'use client'
import React from 'react';

import styles from './modalContainer.module.css';
import { useModal } from '@/hooks/useModal';

const ModalContainer = () => {

  const { isModalOpen, modalTemplate, closeModal } = useModal();

  return (
    <>
      { isModalOpen &&
        <>
          <div className={styles.modal__container} onClick={closeModal} />

          <div className={styles.modal__content}>
            {modalTemplate}
          </div>
        </>
      }
    </>
  );
};

export default ModalContainer;