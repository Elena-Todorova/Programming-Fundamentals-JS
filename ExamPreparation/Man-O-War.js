function manOWar(input) {
    let pirateShip = input.shift().split(">").map(Number);
    let warShip = input.shift().split(">").map(Number);
    let maxHealth = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(" ")
        let command = commands[0];
        let values = commands.slice(1).map(Number)

        switch (command) {
            case 'Fire': fire(warShip, values[0], values[1]); break;
            case 'Defend': defend(pirateShip, values[0], values[1], values[2]); break;
            case 'Repair': repair(pirateShip, values[0], values[1], maxHealth); break;
            case 'Status': status(pirateShip, maxHealth); break;
            case 'Retire':  
            console.log(`Pirate ship status: ${pirateShip.reduce((a, b) => a + b, 0)}`); //this will run over all element left in pirateShip and sum them, starting from 0
            console.log(`Warship status: ${warShip.reduce((a, b) => a + b, 0)}`);
             break;

        }

        if (isShipDead(warShip)) {
            console.log('You won! The enemy ship has sunken.');
            break;
        }
        if (isShipDead(pirateShip)) {
            console.log('You lost! The pirate ship has sunken.');
            break;
        }
    }

    function isShipDead(ship) {
        let deadSections = ship.filter(x => x <= 0);
        return deadSections.length > 0

    }

    function fire(warShip, index, demage) {
        if (index >= 0 && index < warShip.length) {
            warShip[index] -= demage;
        }
    }

    function defend(pirateShip, startIndex, endIndex, demage) {
        if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {
            for (let i = startIndex; i <= endIndex; i++) {
                pirateShip[i] -= demage;
            }
        }
    }

    function repair(ship, index, health, maxHealth) {
        if (index >= 0 && index < ship.length) {
            let missingHealth = maxHealth - ship[index]
            ship[index] += Math.min(missingHealth, health)
        }
    }

    function status(ship, maxHealth) {
        let damageSections = ship.filter(x => x < (maxHealth * 0.2))
        console.log(`${damageSections.length} sections need repair.`);

    }


   
}

manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"])

manOWar(["2>3>4>5>2",

    "6>7>8>9>10>11",

    "20",

    "Status",

    "Fire 2 3",

    "Defend 0 4 11",

    "Repair 3 18",

    "Retire"])