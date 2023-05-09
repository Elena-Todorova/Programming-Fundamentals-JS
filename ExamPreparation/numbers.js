function numbers(input) {
    let numbers = input.shift().split(" ").map(Number);

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ")
        let action = command.shift();
        let value = Number(command[0]);
        let replacement = Number(command[1]);

        switch (action) {
            case "Add": numbers.push(value); break;
            case "Remove": numbers.splice(numbers.indexOf(value), 1); break;
            case "Replace": numbers.splice(numbers.indexOf(value), 1, replacement); break;
            case "Collapse": numbers = numbers.filter(x => x >= value); break;
            case "Finish": console.log(numbers.join(" ")); break;
        }
    }

}

numbers(["1 4 5 19", "Add 1", "Collapse 4", "Finish"])