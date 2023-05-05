function pascalCase(input) {
    
    let inputLower = input.toLowerCase();
    let splited = input[0];

    for (let i = 1; i < input.length; i++) {

        if (input[i] !== inputLower[i]) {
            splited += ", "
        } 
            splited += input[i]
        
    }
    console.log(splited);

}

pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')