function stringGame(input) {

    let text = input.shift();

    let command = input.shift();

    while (command !== 'Done') {
        command = command.split(' ')
        let action = command[0];

        switch (action) {
            case 'Change': {
                let char = command[1];
                let replacement = command[2]

                while (text.includes(char)) {
                    text = text.replace(char, replacement);
                }
                console.log(text);
            }
                break;

            case 'Includes': {
                let substring = command[1];

                if (text.includes(substring)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
            }
                break;

            case 'End': {
                let substring = command[1];

                if (text.endsWith(substring)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
            }
                break;

            case 'Uppercase': {
                text = text.toUpperCase();
                console.log(text);
            }
                break;

            case 'FindIndex': {
                let value = command[1];
                let index = text.indexOf(value);
                console.log(index);
            }
                break;

            case 'Cut': {
                let startIndex = Number(command[1]);
                let count = Number(command[2]);
                let endIndex = startIndex + count;

                let substring = text.slice(startIndex, endIndex);
                console.log(substring);
            }

                break;

        }


        command = input.shift();
    }

}

stringGame(["*S0ftUni is the B3St Plac3**",

"Change 2 o",

"Includes best",

"End is",

"Uppercase",

"FindIndex P",

"Cut 3 7",

"Done"])