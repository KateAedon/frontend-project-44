import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const getTask = () => {
  const num1 = getRandomNumber(1, 30);
  const num2 = getRandomNumber(1, 30);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getTask);
};
