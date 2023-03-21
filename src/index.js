/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import readlineSync from 'readline-sync';

const greetingYou = () => readlineSync.question('May I have your name? ', {
  defaultInput: 'User',
});

export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const maxRoundsGame = 3;

const say = console.log;

const getAnswer = () => readlineSync.question('Your answer: ');

const games = (rule, getCorrectAnswer) => {
  const userName = greetingYou();
  say(rule);
  for (let gameRound = 0; gameRound < maxRoundsGame;) {
    const [question, correctAnswer] = getCorrectAnswer();
    say(`Question: ${question}`);
    const answerUser = getAnswer();
    const resultGame = answerUser === correctAnswer;
    if (resultGame) {
      say('Correct!');
      gameRound += 1;
      if (gameRound === maxRoundsGame) {
        say(`Congratulations, ${userName}!`);
      }
    } else {
      say(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      say(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export default games;
