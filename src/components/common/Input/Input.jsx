import React from 'react';
import './Input.scss';

const Input = (props) => {
  const { label, id } = props;
  return (
    <div className="input">
      {label && (
        <label htmlFor={id} className="input__label">
          {label}
        </label>
      )}
      <input className="input__field" {...props} />
    </div>
  );
};

export default Input;
