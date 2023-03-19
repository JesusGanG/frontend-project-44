import readlineSync from 'readline-sync';

const greetingYou = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  return userName;
};

const check = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

const result = (yourResult, user) => {
  if (yourResult === 3) return console.log(`Congratulations, ${user}!`);
  return console.log(`Let's try again, ${user}!`);
};

export { greetingYou, check, result };
