const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function addStringNumber(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        const str = arr[i];
        let numStr = '';
        for (let j = 0; j < str.length; j++) {
            const char = str[j];
            if (!isNaN(char)) {
                numStr += char;
            }
        }
        if (numStr) {
            const num = parseInt(numStr);
            result += num;
        }
    }
    return result;
}


let inputs = []; // Initialize an empty array to store inputs

function readInput() {
  readline.question('Enter a value (or "exit" to stop): ', (answer) => {
    if (answer.toLowerCase() === 'exit') {
      readline.close();
      console.log('Inputs:', addStringNumber(inputs)); // Print the inputs
    } else {
      inputs.push(answer); // Add input to the array
      readInput(); // Recursively call readInput to read the next input
    }
  });
}

readInput(); // Start reading inputs

