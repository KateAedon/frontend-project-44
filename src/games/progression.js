import runGame from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const length = 10; // длина задана в тех.задании
const description = 'What number is missing in the progression?';

const makeProgression = (initialValue, difference, progressionLength) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const value = initialValue + i * difference;
    progression.push(value);
  }

  return progression;
};

const getTask = () => {
  const initialValue = getRandomNumber(1, 50);
  const difference = getRandomNumber(1, 50);

  const progression = makeProgression(initialValue, difference, length);
  const numberPosition = getRandomIndex(progression);
  const hiddenNumber = progression[numberPosition];
  progression[numberPosition] = '..';

  const question = progression.join(' ');
  const correctAnswer = hiddenNumber.toString();

  return [question, correctAnswer];
};
export default () => {
  runGame(description, getTask);
};
