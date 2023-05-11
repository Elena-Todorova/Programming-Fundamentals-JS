function activationKeys(input) {
    
    let key = input.shift();
    let command = input.shift();

    while(command !== 'Generate' ) {
        let tokens = command.split('>>>');
        let instruction = tokens[0];
        let values = tokens[1]
        switch(instruction) {
            case 'Contains':{
                if(key.includes(values)) {
                    console.log(`${key} contains ${values}`);
                } else{
                    console.log(`Substring not found!`);
                }
            }
            break;

            case 'Flip': {
                let caseUporLow = values;
                let startIndex = Number(tokens[2]);
                let endIndex = Number(tokens[3]);

                let newSection = key.slice(startIndex, endIndex)
                let first = key.substring(0,startIndex);
                let last = key.substring(endIndex);

                if(caseUporLow === 'Upper') {
                    newSection = newSection.toUpperCase();
                } else{
                    newSection = newSection.toLowerCase()
                }

                key = first + newSection + last;

                console.log(key);
            }
            break;

            case 'Slice': {
                let startIndex = Number(values);
                let endIndex = Number(tokens[2]);
                let first = key.slice(0, startIndex);
                let last = key.slice(endIndex);

                key = first + last;
                console.log(key);
            }
            break;
        }
        command = input.shift();
        }
        console.log(`Your activation key is: ${key}`);
    }


activationKeys(["134softsf5ftuni2020rockz42",

"Slice>>>3>>>7",

"Contains>>>-rock",

"Contains>>>-uni-",

"Contains>>>-rocks",

"Flip>>>Upper>>>2>>>8",

"Flip>>>Lower>>>5>>>11",

"Generate"])