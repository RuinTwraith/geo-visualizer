import React from 'react';
import './Modal.scss';
import closeIcon from 'resources/close.png';

const Modal = ({ open, onClose, children, title }) => {
  const handleClose = () => {
    onClose(false);
  };

  return open ? (
    <div className="modal">
      <img
        src={closeIcon}
        alt="close"
        className="modal__close"
        onClick={handleClose}
      />
      <h1 className="modal__title">{title}</h1>
      <div className="modal__content">{children}</div>
    </div>
  ) : null;
};

export default Modal;
