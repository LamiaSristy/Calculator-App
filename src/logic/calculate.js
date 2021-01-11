import operate from './operate';

const calculate = (dataObj, buttonName) => {
  const { total, next, operation } = dataObj;
  const result = dataObj;

  if (buttonName === '+/-') {
    if (total && !next) {
      result.total = total * -1;
    }
    if (next) {
      result.next = next * -1;
    }
  }

  if (buttonName === '.') {
    if (!total && !next) {
      result.total = '0.';
    }
    if (total && !next && total.indexOf('.') === -1) {
      result.total = `${total}.`;
    }
    if (next && next.indexOf('.') === -1) {
      result.next = `${next}.`;
    }
  }

  if (buttonName === '%') {
    if (total && !next) {
      result.total = operate(total, 100, '%');
    }
    if (next) {
      result.next = operate(next, 100, '%');
    }
  }

  if (total && !next) {
    result.operation = buttonName;
  }

  if (buttonName === 'AC') {
    result.total = '';
    result.next = '';
    result.operation = '';
  }

  if (['+', 'X', '-', '÷', '='].includes(buttonName)) {
    if (total && next && operation) {
      const calcOperation = buttonName === '=' ? '' : buttonName;
      result.total = operate(total, next, operation);
      result.operation = calcOperation;
    }
  }

  return result;
};

export default calculate;
