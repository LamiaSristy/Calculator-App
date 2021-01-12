import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
const Display = ({ total, next, operation }) => {
  return (
    <div>
      <p>{next || total}</p>
      <span>
        {next && (total || null)} {operation || null}
      </span>
    </div>
  );
};

Display.defaultProps = {
  total: '0',
  next: undefined,
  operation: undefined,
};

Display.propTypes = {
  total: PropTypes.string,
  operation: PropTypes.string,
  next: PropTypes.string,
};

export default Display;
