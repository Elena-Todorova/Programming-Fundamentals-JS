function huntingGames(input) {
    let days = Number(input.shift())
    let players = Number(input.shift())
    let groupEnergy = Number(input.shift())
    let waterPerDay = Number(input.shift())
    let foodPerDay = Number(input.shift());
    let totalWater = waterPerDay*days*players;
    let totalFood = foodPerDay*days*players;

    for (let i = 1; i <= days; i++) {
        let energyLoss = Number(input[i - 1]);
        groupEnergy -= energyLoss;
        if (groupEnergy <= 0) {
            break;
        }
        if (i > 0 && i % 2 === 0) {
            groupEnergy += (groupEnergy * 0.05);
            totalWater -= (totalWater*0.3)
        }
        if(i % 3 === 0) {
            groupEnergy += (groupEnergy * 0.10);
            totalFood -= (totalFood/players);
        }
    }
if(groupEnergy > 0) {
    console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
} else {
    console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
}
}
huntingGames(["10", "7", "5035.5", "11.3", "7.2", "942.3", "500.57", "520.68", "540.87", "505.99", "630.3", "784.20", "321.21", "456.8", "330"])