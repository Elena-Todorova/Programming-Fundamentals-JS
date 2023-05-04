function race(input) {

    let listNames = input.shift().split(', ');
    let winners = {};

    let paternName = /[A-Za-z]+/g;
    let paternDistance = /[\d]+/g;

    let command = input.shift();

    while (command !== 'end of race') {
        const nameRacer = command.match(paternName).join('');
        const distance = command.match(paternDistance).join('')

        let sumOfDis = 0;
        for (const el of distance) {
            sumOfDis += Number(el)
        }
        if(listNames.includes(nameRacer)) {

        if (!winners.hasOwnProperty(nameRacer)) {
            winners[nameRacer] = sumOfDis
        } else {
            winners[nameRacer] += sumOfDis
        }
    }

        command = input.shift();
    }

    let sorted = Object.entries(winners).sort((a,b) => b[1] - a[1]);

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}

race(['George, Peter, Bill, Tom',

    'G4e@55or%6g6!68e!!@ ',

    'R1@!3a$y4456@',

    'B5@i@#123ll',

    'G@e54o$r6ge#',

    '7P%et^#e5346r',

    'T$o553m&6',

    'end of race'])