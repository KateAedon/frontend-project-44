import readlineSync from 'readline-sync';


const askUsersName = () => {

    const name = readlineSync.question('May I have your name?: ');

    console.log('Hello, ' + name + '!');
};

const getRandomNumber = () => {
    const max = 100; // устанавливаем верхнюю границу чисел
    return Math.floor(Math.random() * (max + 1));
}

const isNumberEven = () => {
const number = getRandomNumber();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log('Question: ', number);



};

export default isNumberEven;