import readline from 'readline';

// Create an interface for reading data from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// array to store user input
const history = [];

// function to get user input
const getUserInput = async () => {
    return new Promise((resolve, _) => {
        rl.question('Enter your message: ', (answer) => {
            // push user input to history
            history.push(answer);
            resolve(answer);
        })
    })
}

const main = async () => {
    // answer variable to store user input
    let answer = ''
    // loop until user types exit
    while (answer.toLowerCase() !== 'exit') {
        // mutating the answer variable to store user input
        answer = await getUserInput();
        console.log(`Your entered: ${answer}`);
        // push user input to history
        history.push(answer);
    }
    console.log('Bye!');
    // push bye to history
    history.push('Assistant: Bye!');
    rl.close();
};

main();

console.log(history);
