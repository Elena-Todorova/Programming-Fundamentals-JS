function train(array) {

    let wagons = array.shift().split(" ").map(Number);
    let capacity = Number(array.shift());

    for (let i = 0; i < array.length; i++) {
        let [command, newPass] = array[i].split(" ")

        if (command === "Add") {
            wagons.push(newPass)
        } else {
            for (let j = 0; j < wagons.length; j++) {
                let pasangers = Number(array[i]);
                if (pasangers + wagons[j] <= capacity) {
                    pasangers += wagons[j]
                    wagons[j] = pasangers
                    break;
                }

            }
        }

    }

    console.log(wagons.join(" "));


}
train(['32 54 21 12 4 0 23',

    '75',

    'Add 10',

    'Add 0',

    '30',

    '10',

    '75'])
console.log("------------");
train(['0 0 0 10 2 4',

    '10',

    'Add 10',

    '10',

    '10',

    '10',

    '8',

    '6'])