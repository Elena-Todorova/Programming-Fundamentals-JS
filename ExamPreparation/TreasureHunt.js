function treasureHunt(input) {
    let treasureChest = input.shift().split("|");

    let index = 0;
    let command = input[index];

    while (command !== "Yohoho!") {
        let treasureCommand = command.split(" ");
        let firstComm = treasureCommand.shift();


        switch (firstComm) {
            case 'Loot': loot(treasureCommand, treasureChest); break;
            case 'Drop': drop(treasureCommand, treasureChest); break;
            case 'Steal': steal(treasureCommand, treasureChest); break;

        }
        index++
        command = input[index];
    }

    function loot(input, treasureChest) {
        for (const el of input) {
            if (treasureChest.includes(el)) {
                continue;
            }
            treasureChest.unshift(el)
        }
    }

    function drop(index, treasureChest) {
        let indexNum = Number(index)
        if (indexNum >= 0 && indexNum < treasureChest.length) {
            let indexItem = treasureChest.splice(indexNum, 1);
            treasureChest.push(indexItem);
        }

    }

    function steal(num, treasureChest) {
        let stolenEl = treasureChest.splice(-num)
        console.log(stolenEl.join(", "));
    }
    let gain = 0;
    let counter = 0;
    

    for (const elTr of treasureChest) {
        gain += Number(elTr.length);
        counter++

    }
    let averageGain = gain / counter;

    if(treasureChest.length <= 0) {
        console.log("Failed treasure hunt.");
    }else{
    
    console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])