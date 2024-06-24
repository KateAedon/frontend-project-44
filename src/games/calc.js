import game from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

function calculate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
}

const getTask = () => {
  const operator = operators[getRandomIndex(operators)];
  const num1 = getRandomNumber(1, 10); // нижняя и верхние границы диапазона
  const num2 = getRandomNumber(1, 10);

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(operator, num1, num2).toString();

  return [`${question}`, correctAnswer];
};

export default () => {
  game(description, getTask);
};
