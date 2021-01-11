import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  try {
    const num1 = Big(+numberOne);
    const num2 = Big(+numberTwo);

    if (operation === '+') {
      result = Big(num1.plus(num2));
    }

    if (operation === '-') {
      result = Big(num1.minus(num2));
    }

    if (operation === 'X') {
      result = Big(num1.times(num2));
    }

    if (operation === '÷') {
      result = Big(num1.div(num2));
    }

    if (operation === '%') {
      result = Big(num1.div(100));
    }
  } catch (error) {
    result = NaN;
  }

  return result.toPrecision();
};

export default operate;
