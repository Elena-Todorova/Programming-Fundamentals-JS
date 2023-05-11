function plantDiscovery(input) {

    let number = input.shift();
    let plants = input.splice(0, number);

    let objPlants = {}

    for (const el of plants) {
        let [plant, rarity] = el.split('<->');

        objPlants[plant] = {
            rarity: Number(rarity),
            rating: [],
        }
    }

    let command = input.shift();

    while (command !== 'Exhibition') {
        let [instruction, plantInfo] = command.split(': ');
        let [plant, value] = plantInfo.split(' - ');

        if(objPlants[plant]) {
        switch (instruction) {
            case 'Rate': objPlants[plant].rating.push(Number(value))
                break;
            case 'Update': objPlants[plant].rarity = Number(value);
                break;
            case 'Reset': objPlants[plant].rating = [];
                break;
        }
        command = input.shift();
    } else {
        console.log('error');
    }
}

    console.log('Plants for the exhibition:');
    for (const key in objPlants) {
       
        let sum = 0;
        let count = objPlants[key].rating.length;
        for (const el of objPlants[key].rating) {
            sum += el
        }
        let average = sum / count;
        if(!average){
            average = 0;
        }

        console.log(`- ${key}; Rarity: ${objPlants[key].rarity}; Rating: ${average.toFixed(2)}`);
    }

}


plantDiscovery(["3",

    "Arnoldii<->4",

    "Woodii<->7",

    "Welwitschia<->2",

    "Rate: Woodii - 10",

    "Rate: Welwitschia - 7",

    "Rate: Arnoldii - 3",

    "Rate: Woodii - 5",

    "Update: Woodii - 5",

    "Reset: Arnoldii",

    "Exhibition"])