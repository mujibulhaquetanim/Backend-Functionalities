import readline from 'readline';

// Create an interface for reading data from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// function to get user input
const getUserInput = async () => {
    return new Promise((resolve, _) => {
        rl.question('Enter your message: ', (answer) => {
            resolve(answer);
        })
    })
}

const main = async () => {
    let answer = ''
    while (answer.toLowerCase() !== 'exit') {
        const userInput = await getUserInput();
        console.log(`Your entered: ${userInput}`);
    }
    console.log('Bye!');
    rl.close();
};

main();
