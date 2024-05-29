import readlineSync from 'readline-sync';
const countRound = 3;

export default (description, getQuestionAndAnswer) => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name?: ');

    console.log('Hello, ' + name + '!');
    console.log(description);

    for (let i = 0; i < countRound; i++) {
        const [question, correctAnswer] = getQuestionAndAnswer();
        console.log(question);
        const answer = readlineSync.question('Your answer: ');

        if (answer === correctAnswer) {
            console.log('Correct!')
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`)
};

//Welcome to the Brain Games!
//May I have your name? Sam
//Hello, Sam!
//nswer "yes" if the number is even, otherwise answer "no".
//Question: 15
//Your answer: no
//Correct!
//Question: 6 
//Your answer: yes
//Correct!
//Question: 7
//Your answer: no
//Correct!
//Congratulations, Sam!