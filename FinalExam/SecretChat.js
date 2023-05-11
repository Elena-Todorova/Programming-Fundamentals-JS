function secretChat(input) {

    let message = input.shift();

    let command = input.shift();

    while (command !== 'Reveal') {
       let newCommand = command.split(':|:');
        let action = newCommand[0];
        let actionValue = newCommand[1];

        switch (action) {
            case 'InsertSpace': 
            actionValue = Number(actionValue);
            let firstPart = message.substring(0, actionValue);
            let secondPart = message.substring(actionValue);
            message = firstPart +' '+ secondPart;
            console.log(message);
                 break;

            case 'Reverse':
                    if(message.includes(actionValue)){
                        message = message.replace(actionValue,'');
                         let substring = actionValue.split('').reverse().join('');
                        message += substring;
                        console.log(message);
                    } else{
                        console.log("error");
                    }
                    break;
            
            case 'ChangeAll':
                let replacement = newCommand[2];

                while (message.includes(actionValue)) {
                message = message.replace(actionValue, replacement);
                }
                console.log(message);
            break;
            
        }
        command = input.shift();
        
    }
    console.log(`You have a new text message: ${message}`);
    
}

secretChat([
        'heVVodar!gniV',
    
    'ChangeAll:|:V:|:l',
    
    'Reverse:|:!gnil',
    
    'InsertSpace:|:5',
    
    'Reveal'])

    secretChat([

        'Hiware?uiy',
        
        'ChangeAll:|:i:|:o',
        
        'Reverse:|:?uoy',
        
        'Reverse:|:jd',
        
        'InsertSpace:|:3',
        
        'InsertSpace:|:7',
        
        'Reveal'
        
        ])