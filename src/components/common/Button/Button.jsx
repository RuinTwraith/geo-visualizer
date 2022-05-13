import React from 'react';
import './Button.scss';

const Button = ({ name, onClick }) => {
  return (
    <div className="button">
      <button className="button__btn" onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
