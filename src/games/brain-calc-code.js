import games from '../index.js';
import randomNum from '../utils.js';

const rules = ('What is the result of expression?');

const operators = ['+', '-', '*'];

const calculate = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const maxFirstNumber = 10;

const maxSecondNumber = 5;

const brainCalculator = () => {
  const num1 = randomNum(1, maxFirstNumber);
  const num2 = randomNum(1, maxSecondNumber);
  const operator = operators[randomNum(0, operators.length - 1)];
  const question = `${num1}${operator}${num2}`;
  const correctAnswer = calculate(operator, num1, num2).toString();
  return [question, correctAnswer];
};

const calculator = () => {
  games(rules, brainCalculator);
};

export default calculator;
