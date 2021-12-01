const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();

rl.question("What's your name? ", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();

rl.question("What's an activity you like doing? ", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();

rl.question("What do you listen to while doing that? ", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();

rl.question("What's your favourite meal? ", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();

rl.question("Which sport is your absolute favourite? ", (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
});