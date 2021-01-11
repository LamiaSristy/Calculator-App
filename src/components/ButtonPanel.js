import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
// import styles from './styles.module.css';

const ButtonPanel = ({ buttons, clickHandler }) => (
  <div>
    {buttons.map((row, i) => (
      <div key={`row${buttons[i][0]}`}>
        {row.map(name => (
          <Button
            name={name}
            clickHandler={buttonName => clickHandler(buttonName)}
            key={name}
          />
        ))}
      </div>
    ))}
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default ButtonPanel;
