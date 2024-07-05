import game from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const length = 10; // длина задана в тех.задании
const description = 'What number is missing in the progression?';


const makeProgression = () => {
  const progression = [];
  const initialValue = getRandomNumber(1, 50);
  const difference = getRandomNumber(1, 50);

  for (let i = 0; i < length; i += 1) {
    const value = initialValue + i * difference;
    progression.push(value);
  }

  return progression;
};

const getTask = () => {
  const progression = makeProgression();
  const numberPosition = getRandomIndex(progression);
  const hiddenNumber = progression[numberPosition];
  progression[numberPosition] = '..';

  const question = progression.join(' ');
  const correctAnswer = hiddenNumber.toString();

  return [question, correctAnswer];
};
export default () => {
  game(description, getTask);
};
