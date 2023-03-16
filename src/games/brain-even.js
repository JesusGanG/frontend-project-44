import readlineSync from 'readline-sync';

const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min));

const say = console.log;

say('Welcome to the Brain Games!');
const name = readlineSync.question('May i have your name?');
say(`Hello,${name}!`);
say('Answer "yes" if the number is even, otherwise answer "no",');

const BrainEven = () => {
  for (let i = 0; i <= 2; i += 1) {
    const number = getRandomNum(1, 100);
    say(`Question: ${number}`);
    const UserAnswer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (UserAnswer === 'yes') {
        say('Correct!');
      } else {
        say(`"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${name}!`);
        return;
      }
    } else if (number % 2 !== 0) {
      if (UserAnswer === 'no') {
        say('Correct!');
      } else {
        say(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${name}!`);
        return;
      }
    } else {
      say(`"Wrong answer ;(.\nLet's try again, ${name}`);
      return;
    }
  }
  say(`Congratulations, ${name}!`);
};

export default BrainEven;
