function messageTranslate(input) {

    let pattern = /!(?<str>[A-Z][a-z]+)!:\[(?<strTwo>[A-Za-z]+)\]/g;
    let number = Number(input.shift());

    for (let i = 0; i < number; i++) {
        let string = input[i];
        let match = pattern.exec(string)

        if (match) {
            let group = match.groups.str;
            let groupTwo = match.groups.strTwo;
            let chars = ""

            for (let i = 0; i < groupTwo.length; i++) {
                let char = groupTwo[i].charCodeAt()
                chars += char + " "
            }
            console.log(`${group}: ${chars}`);

        } else {
            console.log('The message is invalid');
        }
    }


}

messageTranslate(["2",

"!Send!:[IvanisHere]",

"*Time@:[Itis5amAlready"])