import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getTask = () => {
  const question = getRandomNumber(1, 30).toString();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};
export default () => {
  runGame(description, getTask);
};
