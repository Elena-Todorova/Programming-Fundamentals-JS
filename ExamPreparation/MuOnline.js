function muOnline(rooms) {
    let room = rooms.split("|");
    let health = 100;
    let bitcoin = 0;
    let roomCount = 0;

    for (let i = 0; i < room.length; i++) {
        let [command, number] = room[i].split(" ");
        let numberToNum = Number(number)
        roomCount++
        if (command == 'potion') {
            let healHealth = 100 - health;
            health += numberToNum;
            if (health > 100) {
                health = 100;
                console.log(`You healed for ${healHealth} hp.`);
            } else{
                console.log(`You healed for ${numberToNum} hp.`);
            }
            console.log(`Current health: ${health} hp.`);
        } else if (command == 'chest') {
            bitcoin += numberToNum
            console.log(`You found ${numberToNum} bitcoins.`);
        } else {
            health -= numberToNum;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else{
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomCount}`);
                break;
            }
        }

    }
    if(health > 0) {
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoin}`);
    console.log(`Health: ${health}`);
    }

}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")