import games from '../index.js';
import randomNum from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = () => {
  const question = randomNum(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, String(correctAnswer)];
};

const brainPrime = () => {
  games(rules, getCorrectAnswer);
};

export default brainPrime;
