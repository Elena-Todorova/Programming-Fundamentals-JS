function houseParty(guests) {

    let listNames = [];

    for (i = 0; i < guests.length; i++) {
        let array = guests[i].split(" ")

        if (!listNames.includes(array[0])) {
            if (!array.includes("not")) {
                listNames.push(array[0])
            } else {

                console.log(`${array[0]} is not in the list!`);
            }
        } else {
            if (array.includes("not")) {
                let nameIn = array[0]
                listNames.splice((listNames.indexOf(nameIn)),1)

              
            } else {
            console.log(`${array[0]} is already in the list!`);
        }
    }
        //console.log(name);

    }
    console.log(listNames.join("\n"));
}
houseParty(['Allie is going!',

    'George is going!',

    'John is not going!',

    'George is not going!'])

console.log("--------------");
houseParty(['Tom is going!',

    'Annie is going!',

    'Tom is going!',

    'Garry is going!',

    'Jerry is going!'])