const operandWeight = opertor => {
  switch (opertor) {
    case '+':
    case '-':
      return 1;
    case '*':
    case '/':
      return 2;
    default:
      return 0;
  }
};
const infixToPostfix = exp => {
  const stack = [];
  let res = ' ';
  for (let i = 0; i < exp.length; i += 1) {
    const ch = exp[i];
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(ch)) {
      res += ch;
    } else if (['+', '-', '*', '/'].includes(exp[i])) {
      // console.log(stack);
      while (
        stack.length !== 0 &&
        operandWeight(ch) <= operandWeight(stack[stack.length - 1])
      ) {
        res += stack.pop();
        res += ' ';
      }
      stack.push(ch);
    }
  }
  while (stack.length !== 0) {
    res += stack.pop();
    res += ' ';
  }
  return res;
};
const calculatorResult = text => {
  const stack = [];
  const postfix = infixToPostfix(text);
  postfix.split('').forEach(s => {
    if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(s)) {
      stack.push(+s);
    } else if (['+', '-', '*', '/'].includes(s)) {
      const x = stack.pop();
      let y = stack.pop();
      switch (s) {
        case '+':
          y += x;
          break;
        case '-':
          y -= x;
          break;
        case '*':
          y *= x;
          break;
        case '/':
          y /= x;
          break;

        default:
          break;
      }
      stack.push(y);
    }
  });
  return String(stack.pop());
};

export default calculatorResult;
