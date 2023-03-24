import games, { randomNum } from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = (step, length, number) => {
  const array = [];
  for (let i = 0; i < length; i += 1) {
    array.push(number + i * step);
  }
  return array;
};

const getCorrectAnswer = () => {
  const step = randomNum(1, 10);
  const progressionLength = randomNum(5, 15);
  const number = randomNum(0, 100);
  const array = getProgression(step, progressionLength, number);
  const hiddenIndex = randomNum(0, array.length - 1);
  const correctAnswer = array[hiddenIndex];
  array[hiddenIndex] = '..';
  const question = array.join(' ');
  return [question, String(correctAnswer)];
};

const brainProgression = () => {
  games(rules, getCorrectAnswer);
};

export default brainProgression;
