import readlineSync from 'readline-sync';
import { greetUser } from './cli.js';

const countRound = 3;

export default (description, getQuestionAndAnswer) => {
  const name = greetUser();
  console.log(description);

  for (let i = 0; i < countRound; i++) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
