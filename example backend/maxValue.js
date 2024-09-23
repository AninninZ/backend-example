const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function maxValue(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        const num = Number(arr[i]);
        if (num > max) {
            max = num;
        }
    }
    return max;
}

let inputs = [];

// infinity loop bc .question is async function then when readline.question is called it can't be go to next line
// function readInput() {
//     readline.question('Enter a value (or "exit" to stop): ', (answer) => {
//         if (answer.toLowerCase() === 'exit') {
//             readline.close();
//             console.log('Max value:', maxValue(inputs));
//         } else {
//             inputs.push(answer);
//             readInput();
//         }
//     });
// }

// readInput();

function askQuestion(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

async function readInput() {
    const loopNumber = await askQuestion('Enter loop number: ');
    const number = Number(loopNumber);
    if (number > 0) {
        const inputs = [];
        for (let i = 0; i < number; i++) {
            const answer = await askQuestion('Enter a value: ');
            inputs.push(answer);
        }
        readline.close();
        console.log('Max value:', maxValue(inputs)); // Assuming maxValue is defined elsewhere
    } else {
        console.log('Invalid loop number.');
        readInput();
    }
}

readInput();