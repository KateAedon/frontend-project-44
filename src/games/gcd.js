import game from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

/* eslint-disable no-param-reassign */
function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
/* eslint-enable no-param-reassign */

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 30); // нижняя и верхние границы диапазона
  const num2 = getRandomNumber(1, 30);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();

  return [`${question}`, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
