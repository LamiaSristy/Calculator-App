import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const buttons = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <div>
      {buttons.map((row, i) => (
        <div className="row" key={`row${buttons[i][0]}`}>
          {row.map(name => (
            <Button name={name} key={name} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;
