import game from '../index.js';
import getRandomNumber from '../generateRandomNumber.js';

const description = 'What is the result of the expression?';

function getRandomOperation() {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  return operations[randomIndex];
}

function calculate(operator, num1, num2) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
  return result;
}

const getQuestionAndAnswer = () => {
  const operator = getRandomOperation();
  const num1 = getRandomNumber(1, 10); // нижняя и верхние границы диапазона
  const num2 = getRandomNumber(1, 10);

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(operator, num1, num2).toString();

  return [`Question: ${question}`, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
