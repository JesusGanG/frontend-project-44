import games from '../index.js';
import randomNum from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getCorrectAnswer = () => {
  const question = randomNum(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEven = () => {
  games(rules, getCorrectAnswer);
};

export default brainEven;
