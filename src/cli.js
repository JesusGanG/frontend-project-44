import readlineSync from 'readline-sync';

const brainGames = () => {
  // eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default brainGames;
