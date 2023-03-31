import games from '../index.js';
import randomNum from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => (num2 !== 0 ? gcd(num2, num1 % num2) : num1);

const getCorrectAnswer = () => {
  const firstNumber = randomNum(0, 30);
  const secondNumber = randomNum(0, 30);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = gcd(firstNumber, secondNumber).toString();
  return [question, correctAnswer];
};

const brainGCD = () => {
  games(rules, getCorrectAnswer);
};

export default brainGCD;
