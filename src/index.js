import readlineSync from 'readline-sync';
import makeWelcome from './cli.js';

const maxRoundsGame = 3;

const getAnswer = () => readlineSync.question('Your answer: ');

const games = (rules, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = makeWelcome();
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let gameRound = 0; gameRound < maxRoundsGame;) {
    const [question, correctAnswer] = getCorrectAnswer();
    console.log(`Question: ${question}`);
    const answerUser = getAnswer();
    const isAnswerCorrect = answerUser === correctAnswer;
    if (isAnswerCorrect) {
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
