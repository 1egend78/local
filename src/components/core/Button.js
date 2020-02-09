import React from 'react';
const Button = ({ children, onClickFn}) => {
  return (
    <button onClick={onClickFn} className="btn btn-outline-primary">
        {children}
    </button>
  );
}
export default Button;