import React from 'react';
import './Modal.css';
import useModal from './useModal';

const Modal = () => {
  const [isOpen, openModal, closeModal] = useModal(true);
  return (
    <div className="Container" data-testid="counter-container">
      <section className="Content">
        <div className="Content__title">{isOpen ? 'My modal is open' : 'My modal is close'}</div>
        <div className="Content__button" onClick={() => openModal()}>Open</div>
        <div className="Content__button" onClick={() => closeModal()}>Close</div>
      </section>
    </div>
  );
};

export default Modal;