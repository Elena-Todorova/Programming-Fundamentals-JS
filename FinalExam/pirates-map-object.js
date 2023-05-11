function pirates(input) {

    function createTown(townName, townPopulation, townGold) {
        let town = {
            name: townName,
            population: townPopulation,
            gold: townGold,
            plunder(people, gold) {
                this.population -= people;
                this.gold -= gold;
                console.log(`${this.name} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                if (this.population <= 0 || this.gold <= 0) {
                    console.log(`${this.name} has been wiped off the map!`);
                    towns.delete(this.name);
                }
            },
            prosper(gold) {
                if (gold < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else {
                    this.gold += gold;
                    console.log(`${gold} gold added to the city treasury. ${this.name} now has ${this.gold} gold.`);
                }
            },

            finalPrint() {
                console.log(`Ahoy, Captain! There are ${towns.length} wealthy settlements to go to:`);
                console.log(`${this.name} -> Population: ${this.population} citizens, Gold: ${this.gold} kg`)

            }

        }
        return town;
    }

    let towns = new Map();
    let command = input.shift();

    while (command !== 'Sail') {
        townInfo = command.split('||')
        let name = townInfo[0];
        let population = Number(townInfo[1]);
        let gold = Number(townInfo[2]);
        let town = createTown(name, population, gold);
        towns.set(name, town);
        command = input.shift();
    }
    let newCommand = input.shift();
    while (newCommand !== 'End') {
        let instructions = newCommand.split('=>');
        let command = instructions[0];
        let townName = instructions[1];
        let valueOne = Number(instructions[2]);
        let valueTwo = Number(instructions[3]);

        switch (command) {
            case 'Plunder': {
                let town = towns.get(townName);
                town.plunder(valueOne, valueTwo);
            }
                break;

            case 'Prosper': {
                let town = towns.get(townName);
                town.prosper(valueOne)
            }
                break;
        }
        newCommand = input.shift();
    }
if(towns.size > 0) {
    console.log(`Ahoy, Captain! There are ${towns.size} wealthy settlements to go to:`);
    for (const town of towns.values()) {
        console.log(`${town.name} -> Population: ${town.population} citizens, Gold: ${town.gold} kg`)
    }
} else {
    console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
}
}

pirates(["Tortuga||345000||1250",

    "Santo Domingo||240000||630",

    "Havana||410000||1100",

    "Sail",

    "Plunder=>Tortuga=>75000=>380",

    "Prosper=>Santo Domingo=>180",

    "End"])