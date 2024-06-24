import game from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const initialValue = getRandomNumber(1, 50);
const difference = getRandomNumber(1, 50);

const makeProgression = () => {
  const length = 10; // длина задана в тех.задании
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    const value = initialValue + i * difference;
    progression.push(value);
  }

  return progression;
};

const getTask = () => {
  const progression = makeProgression(initialValue, difference);
  const numberPosition = getRandomIndex(progression);
  const hiddenNumber = progression[numberPosition];
  progression[numberPosition] = '..';

  const question = progression.join(' ');
  const correctAnswer = String(hiddenNumber);

  return [question, correctAnswer];
};
export default () => {
  game(description, getTask);
};
