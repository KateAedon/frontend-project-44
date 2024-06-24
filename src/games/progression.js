import game from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const initialValue = getRandomNumber(1, 30);
const difference = getRandomNumber(1, 30);

const makeProgression = (initialValue, difference) => {
  const length = 10; // длина задана в тех.задании  
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    const value = initialValue + i * difference;
    progression.push(value);
  }

  return progression;
};

/* eslint-disable no-param-reassign */
const hideNumber = (progression) => {
  const numberPosition = getRandomIndex(progression);
  const hiddenNumber = progression[numberPosition];
  progression[numberPosition] = '..';
  return { progression, hiddenNumber };
};
/* eslint-enable no-param-reassign */

const getTask = () => {
  const progression = makeProgression(initialValue, difference);
  const { progression: progressionWithHiddenNumber, hiddenNumber } = hideNumber(progression);
  const question = progressionWithHiddenNumber.join(' ');
  const correctAnswer = String(hiddenNumber);

  return [question, correctAnswer];
};
export default () => {
  game(description, getTask);
};
