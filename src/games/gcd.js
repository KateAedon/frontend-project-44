import game from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

function getRandomNumber(min, max) {
    let rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

function gcd(a, b) {
    while (b !== 0) {
        const temp = b; 
        b = a % b;    
        a = temp;     
    }
    return a; 
}

const getQuestionAndAnswer = () => {
    const num1 = getRandomNumber(1, 30); //нижняя и верхние границы диапазона
    const num2 = getRandomNumber(1, 30);
    const question = `${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2).toString();
    
    return [question, correctAnswer];
}

export default () => {
  game(description, getQuestionAndAnswer);  
};
