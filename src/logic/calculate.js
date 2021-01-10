import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  const resultData = data;

  if (buttonName === '+/-') {
    if (total && !next) {
      resultData.total = total * -1;
    }
    if (next) {
      resultData.next = next * -1;
    }
  }

  if (buttonName === '%') {
    if (total && !next) {
      resultData.total = operate(total, 100, '%');
    }
    if (next) {
      resultData.next = operate(next, 100, '%');
    }
  }

  if (buttonName === '.') {
    if (!total && !next) {
      resultData.total = '0.';
    }
    if (total && !next && total.indexOf('.') === -1) {
      resultData.total = `${total}.`;
    }
    if (next && next.indexOf('.') === -1) {
      resultData.next = `${next}.`;
    }
  }

  if (buttonName === 'AC') {
    resultData.total = '';
    resultData.next = '';
    resultData.operation = '';
  }

  if (['+', 'X', '-', '÷', '='].includes(buttonName)) {
    if (total && next && operation) {
      const newOperation = buttonName === '=' ? '' : buttonName;
      resultData.total = operate(total, next, operation);
      resultData.operation = newOperation;
    }

    if (total && !next) {
      resultData.operation = buttonName;
    }
  }

  return resultData;
};

export default calculate;