import React from 'react';
import Modal from 'components/common/Modal';
import Input from 'components/common/Input';

const AddInfoModal = ({ openModal, type, onClose }) => {
  const title = `Add a ${type}`;
  return (
    <Modal open={openModal} title={title} onClose={onClose}>
      {type === 'Review' && (
        <Input id={title} type="text" label={'Give your review a title'} />
      )}
      {type === 'Photo' && <p>Add Photo</p>}
    </Modal>
  );
};

export default AddInfoModal;
