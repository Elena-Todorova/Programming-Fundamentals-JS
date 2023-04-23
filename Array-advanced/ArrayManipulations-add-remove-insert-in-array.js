function arrayManipulation(commands) {
    let array = commands.shift().split(" ").map(Number);

    for (let i = 0; i < commands.length; i++) {
        let [command, firstN, secondN] = commands[i].split(" ");
        let firstNum = Number(firstN);
        let secondNum = Number(secondN);

        switch (command) {
            case "Add": array.push(firstNum); break;
            case "Remove": remove(firstNum); break;
            case "RemoveAt": array.splice(firstNum, 1); break;
            case "Insert": array.splice(secondNum, 0, firstNum); break;

            function remove(num) {
                array = array.filter(x => x !== num)
            }
        }
    }
    console.log(array.join(" "));
}






arrayManipulation(['6 12 2 65 6 42',

'Add 8',

'Remove 12',

'RemoveAt 3',

'Insert 6 2'])