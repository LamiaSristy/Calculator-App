import React from 'react';
import PropTypes from 'prop-types';

// prettier-ignore
const Button = ({
  name, clickHandler,
}) => (
  <button
    type="button"
    className="row"
    onClick={() => clickHandler(name)}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
