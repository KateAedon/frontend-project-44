import game from '../index.js';

const description = 'What is the result of the expression?';

function getRandomNumber(min, max) {
    let rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

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
    }
    return result;
}

const getQuestionAndAnswer = () => {
    const operator = getRandomOperation();
    const num1 = getRandomNumber(1, 10); //нижняя и верхние границы диапазона
    const num2 = getRandomNumber(1, 10);

    const question = `${num1}${operator}${num2}`;
    const correctAnswer = calculate(operator, num1, num2).toString();
    
    return [question, correctAnswer];
}

export default () => {
  game(description, getQuestionAndAnswer);  
};
