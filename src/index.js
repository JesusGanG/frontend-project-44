import readlineSync from 'readline-sync';

const maxRoundsGame = 3;

const games = (rules, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let gameRound = 0; gameRound < maxRoundsGame; gameRound += 1) {
    const [question, correctAnswer] = getCorrectAnswer();
    console.log(`Question: ${question}`);
    const isAnswerUser = readlineSync.question('Your answer: ');
    if (correctAnswer !== isAnswerUser) {
      console.log(`${isAnswerUser} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default games;
