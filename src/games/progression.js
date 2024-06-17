import game from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const makeProgression = () => {
  const initialValue = getRandomNumber(1, 30);
  const difference = getRandomNumber(1, 30);
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
  const numberPosition = getRandomNumber(0, progression.length - 1);
  const hiddenNumber = progression[numberPosition];
  progression[numberPosition] = '..';
  return { progression, hiddenNumber };
};
/* eslint-enable no-param-reassign */

const getQuestionAndAnswer = () => {
  const progression = makeProgression();
  const { progression: progressionWithHiddenNumber, hiddenNumber } = hideNumber(progression);
  const question = progressionWithHiddenNumber.join(' ');
  const correctAnswer = String(hiddenNumber);

  return [`${question}`, correctAnswer];
};
export default () => {
  game(description, getQuestionAndAnswer);
};
