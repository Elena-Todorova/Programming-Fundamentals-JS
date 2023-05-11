function pirates(input) {
    
    let array = [];
    let objectTowns = {};

    let command = input.shift();

    while (command !== 'Sail') {
        townInfo = command.split('||')
        let town = townInfo[0];
        let population = Number(townInfo[1]);
        let gold = Number(townInfo[2]);

        let isTownFound = array.find((x) => x.town === town);
        let index = array.indexOf(isTownFound);

        if(!isTownFound){
            objectTowns = {
                town,
                population,
                gold,
            }
            array.push(objectTowns)
        } else {
            array[index].population += population;
            array[index].gold += gold;
        }
        
        command = input.shift();

    }
    
    let newCommand = input.shift();

    while (newCommand !== 'End') {
        let instructions = newCommand.split('=>');
        let command = instructions[0];
        let town = instructions[1];

        let isTownFound = array.find((x) => x.town === town);
        let index = array.indexOf(isTownFound);

        switch(command) {
            case 'Plunder': {
                let people = Number(instructions[2]);
                let gold = Number(instructions[3]);
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                array[index].population -= people;
                array[index].gold -= gold;

                if(array[index].population <= 0 || array[index].gold <= 0) {
                    console.log(`${town} has been wiped off the map!`);
                    array.splice(index,1);
                }

            }
            break;
            case 'Prosper':{
                let gold = Number(instructions[2]);

                if(gold < 0) {
                    console.log('Gold added cannot be a negative number!');
                } else{
                    array[index].gold += gold;
                    console.log(`${gold} gold added to the city treasury. ${town} now has ${array[index].gold} gold.`);
                }
            }
                break;
        }
        newCommand = input.shift();
        
    }
    if(array.length > 0){
        console.log(`Ahoy, Captain! There are ${array.length} wealthy settlements to go to:`);

        array.forEach((x) => console.log(`${x.town} -> Population: ${x.population} citizens, Gold: ${x.gold} kg`)) 
    } else{
   
    console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}

pirates((["Nassau||95000||1000",

"San Juan||930000||1250",

"Campeche||270000||690",

"Port Royal||320000||1000",

"Port Royal||100000||2000",

"Sail",

"Prosper=>Port Royal=>-200",

"Plunder=>Nassau=>94000=>750",

"Plunder=>Nassau=>1000=>150",

"Plunder=>Campeche=>150000=>690",

"End"]))