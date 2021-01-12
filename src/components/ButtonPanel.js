import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ buttons, clickHandler }) => {
  const divList = [];
  buttons.forEach(row => {
    const list = [];
    row.forEach(button => {
      list.push(
        <Button
          name={button}
          clickHandler={buttonName => clickHandler(buttonName)}
          key={button}
        />,
      );
    });

    divList.push(
      <div key={`row${row[0]}`}>{list}</div>,
    );
  });

  return (
    <div>
      {divList}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default ButtonPanel;
