function theImitationGame(input) {
    let message = input.shift();

    let command = input.shift();

    while (command !== 'Decode') {
        let instructions = command.split('|');
        let action = instructions[0];

        switch (action) {
            case 'Move': {
                let numLetters = Number(instructions[1]);
                let lettersToMove = message.slice(0, numLetters);
                message = message.replace(lettersToMove, '')
                message += lettersToMove;
            }
                break;
            case 'Insert':{
                let index = Number(instructions[1]);
                let insertValue = instructions[2];
                let firstPart = message.substring(0, index);
                let secondPart = message.substring(index);
                message = firstPart + insertValue + secondPart;
            }
                 break;
            case 'ChangeAll': {
                let substring = instructions[1];
                let replacement = instructions[2];
                while (message.includes(substring)) {
                    message = message.replace(substring, replacement);
                }
            }
                 break;


        }

        command = input.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([

    'owyouh',
    
    'Move|2',
    
    'Move|3',
    'Insert|3|are', 'Insert|9|?', 'Decode' 

])