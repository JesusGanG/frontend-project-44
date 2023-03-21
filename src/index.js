/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';

const greetingYou = () => readlineSync.question('May I have your name? ', {
  defaultInput: 'User',
});

export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const maxRoundsGame = 3;

const getAnswer = () => readlineSync.question('Your answer: ');

const games = (rule, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = greetingYou();
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  for (let gameRound = 0; gameRound < maxRoundsGame;) {
    const [question, correctAnswer] = getCorrectAnswer();
    console.log(`Question: ${question}`);
    const answerUser = getAnswer();
    const resultGame = answerUser === correctAnswer;
    if (resultGame) {
      console.log('Correct!');
      gameRound += 1;
      if (gameRound === maxRoundsGame) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export default games;
