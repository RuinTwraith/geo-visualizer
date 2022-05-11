import React from 'react';
import './Button.scss';

const button = ({ name }) => {
  return (
    <div className="button">
      <button className="button__btn">{name}</button>
    </div>
  );
};

export default button;
