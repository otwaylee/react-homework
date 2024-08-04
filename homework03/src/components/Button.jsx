import React from 'react';
import {string, func, object} from 'prop-types';

function Button({ label, onClick, type = 'button', style, className }) {
  return (
    <button type={type} onClick={onClick} style={style} className={`button ${className}`}>
      {label}
    </button>
  );
}


Button.propTypes = {
  label: string.isRequired,
  onClick: func.isRequired,
  type: string,
  style: object,
  className: string,
};

export default Button;